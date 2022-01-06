import {
  Box,
  Button,
  Center,
  HStack,
  Icon,
  IconButton,
  IIconProps,
  Pressable,
  Spinner,
  Text,
  VStack,
} from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { createMoodLog, listMoodLogs, notionSDK } from "../utils/notion";
import { formatISO, isYesterday, startOfYesterday } from "date-fns";

import { Audio } from "expo-av";
import { DateSelector } from "../components/DateSelector";
import { Star } from "../components/Stars";
import { Loading } from "../components/Loading";
import { match } from "ts-pattern";
import { Sad } from "../components/Sad";
import { Happy } from "../components/Happy";
import { Boom } from "../components/Boom";
import { DoIt } from "../components/DoIt";

const STORAGE_KEY = "@last-day-mood-log";

enum Moods {
  Happy = "Happy",
  Fine = "Fine",
  Upset = "Upset",
  Unstable = "Unstable",
  Boom = "Boom",
}

const MoodsEmojiMap = {
  [Moods.Happy]: "😄",
  [Moods.Fine]: "😊",
  [Moods.Upset]: "😞",
  [Moods.Unstable]: "🥴",
  [Moods.Boom]: "💥",
};

const MoodSoundMap = {
  [Moods.Happy]: require("../assets/sounds/fine.wav"),
  [Moods.Fine]: require("../assets/sounds/c.wav"),
  [Moods.Upset]: require("../assets/sounds/sad.wav"),
  [Moods.Unstable]: require("../assets/sounds/doit.wav"),
  [Moods.Boom]: require("../assets/sounds/mf.wav"),
};

export function Mood() {
  const [date, setDate] = useState<Date>(new Date());
  const [is2SecDone, setIs2SecDone] = useState(false);
  const [sound, setSound] = useState<Audio.Sound | null>();
  const { data, isLoading, refetch } = useQuery("moods", listMoodLogs);

  const { mutate, isLoading: isSubmitLoading } = useMutation(
    async (mood: Moods) =>
      createMoodLog({ content: `${MoodsEmojiMap[mood]} ${mood}`, date }),
    {
      onSuccess: async (_, mood) => {
        await refetch();
        const { sound } = await Audio.Sound.createAsync(MoodSoundMap[mood]);
        setSound(sound);
        await sound.setVolumeAsync(0.7);
        await sound.playAsync();
        setSound(null);
      },
    }
  );

  useEffect(() => {
    setTimeout(() => {
      setIs2SecDone(true);
    }, 2000);
  }, []);

  const onMoodSubmit = (mood: Moods) => mutate(mood);

  const currentMood = data?.[formatISO(date, { representation: "date" })];

  if (isLoading || isSubmitLoading || !is2SecDone)
    return (
      <Center h="100%">
        <Loading />
      </Center>
    );

  return (
    <VStack h={"full"} alignItems={"center"} space={30} mt={2}>
      <DateSelector onDateChange={setDate} date={date} />
      {sound && (
        <IconButton
          _icon={{
            as: MaterialCommunityIcons,
            name: "pause",
            borderRadius: 50,
          }}
          _pressed={{ bgColor: "amber.200" }}
        />
      )}

      {currentMood ? (
        <VStack flexGrow={1} alignItems={"center"}>
          <Text fontSize={"md"} italic pb="1.5">
            Logged as: <Text bold>{currentMood}</Text>
          </Text>
          <Center
            flexGrow={1}
            mb={100}
            _text={{ fontSize: "xl", paddingX: 5, textAlign: "center" }}
          >
            {match(currentMood?.split(" ")[1])
              .with(Moods.Happy, () => <Happy />)
              .with(Moods.Fine, () => <Star />)
              .with(Moods.Upset, () => <Sad />)
              .with(Moods.Unstable, () => <DoIt />)
              .with(Moods.Boom, () => <Boom />)
              .otherwise(() => (
                <Star />
              ))}
          </Center>
        </VStack>
      ) : (
        <Center flexGrow={1}>
          <Text fontSize={"2xl"} textAlign={"center"}>
            <Text bold>Long Press</Text> Your Mood
          </Text>
          <HStack
            space={100}
            flexWrap={"wrap-reverse"}
            justifyContent={"center"}
          >
            <IconWithText
              onPress={onMoodSubmit}
              icon="💥"
              color="red.600"
              state={Moods.Boom}
            />

            <IconWithText
              onPress={onMoodSubmit}
              icon="😞"
              color="amber.600"
              state={Moods.Upset}
            />

            <IconWithText
              onPress={onMoodSubmit}
              icon="🥴"
              color="gray.600"
              state={Moods.Unstable}
            />

            <IconWithText
              onPress={onMoodSubmit}
              icon="😊"
              color="cyan.600"
              state={Moods.Fine}
            />

            <IconWithText
              onPress={onMoodSubmit}
              icon="😄"
              color="green.600"
              state={Moods.Happy}
            />
          </HStack>
        </Center>
      )}
    </VStack>
  );
}

const IconWithText = ({
  icon,
  state,
  color,
  onPress,
}: {
  icon: string;
  state: Moods;
  color: IIconProps["color"];
  onPress?: (state: Moods) => void;
}) => {
  return (
    <VStack space={2} alignItems="center">
      <Pressable
        width={140}
        p={3}
        borderRadius={20}
        _hover={{
          opacity: 0.8,
          bgColor: "gray.50",
        }}
        _pressed={{
          opacity: 0.8,
          bgColor: "gray.100",
        }}
        onLongPress={() => onPress && onPress(state)}
      >
        <Text fontSize={"6xl"} textAlign="center">
          {icon}
        </Text>

        <Text bold fontSize="xl" color={color} textAlign="center">
          {state}
        </Text>
      </Pressable>
    </VStack>
  );
};
