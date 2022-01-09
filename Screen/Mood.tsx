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
import { Down } from "../components/Down";
import { Happy } from "../components/Happy";
import { Boom } from "../components/Boom";
import { DoIt } from "../components/DoIt";
import { Button, Card, Icon, Layout, Text } from "@ui-kitten/components";
import { View, ViewProps } from "react-native";
import { EvaStatus } from "@ui-kitten/components/devsupport";

enum Moods {
  Happy = "Happy",
  Fine = "Fine",
  Down = "Down",
  Boom = "Boom",
}

const MoodsEmojiMap = {
  [Moods.Happy]: "😄",
  [Moods.Fine]: "😊",
  [Moods.Down]: "😞",
  [Moods.Boom]: "💣",
};

const MoodSoundMap = {
  [Moods.Happy]: require("../assets/sounds/happy.wav"),
  [Moods.Fine]: require("../assets/sounds/fine.wav"),
  [Moods.Down]: require("../assets/sounds/down.wav"),
  [Moods.Boom]: require("../assets/sounds/boom.wav"),
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
      },
    }
  );

  useEffect(() => {
    setTimeout(() => {
      setIs2SecDone(true);
    }, 2000);
  }, []);

  const onMoodSubmit = (mood: Moods) => mutate(mood);

  const onStopSound = async () => {
    if (sound) {
      console.log("stopping sound");
      try {
        await sound.stopAsync();
      } finally {
        sound.unloadAsync();
        setSound(null);
      }
    }
  };

  const onPlaySound = async (mood: Moods) => {
    if (!sound) {
      const { sound } = await Audio.Sound.createAsync(MoodSoundMap[mood]);
      setSound(sound);
      await sound.setVolumeAsync(0.5);
      await sound.playAsync();
      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded && status.didJustFinish) {
          setSound(null);
        }
      });
    }
  };

  useEffect(() => {
    onStopSound();
  }, [date]);

  const currentMood =
    data?.[formatISO(date, { representation: "date" })]?.split(" ")[1];

  if (isLoading || isSubmitLoading || !is2SecDone) return <Loading />;

  return (
    <Layout style={{ height: "100%", alignItems: "center", marginTop: 10 }}>
      <DateSelector onDateChange={setDate} date={date} />

      {currentMood ? (
        <>
          <Text>
            Logged as: <Text style={{ fontWeight: "bold" }}>{currentMood}</Text>
          </Text>
          <View
            style={{
              flexGrow: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {match(currentMood)
              .with(Moods.Happy, () => <Happy />)
              .with(Moods.Fine, () => <Star />)
              .with(Moods.Down, () => <Down />)
              .with(Moods.Boom, () => <Boom />)
              .otherwise(() => (
                <Star />
              ))}
          </View>
          <Button
            onPress={() => (sound ? onStopSound() : onPlaySound(currentMood))}
            style={{ marginBottom: 80 }}
            size={"bigIcon"}
            appearance={"ghost"}
            accessoryLeft={
              <Icon
                name={sound ? "stop-circle-outline" : "play-circle-outline"}
              />
            }
          />
        </>
      ) : (
        <Center style={{ flexGrow: 1 }}>
          <Text category={"h5"} style={{ textAlign: "center" }}>
            Long Press{" "}
            <Text category={"h6"} appearance={"hint"}>
              Your Mood
            </Text>
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              flexWrap: "wrap",
              margin: 20,
            }}
          >
            <IconWithText
              onPress={onMoodSubmit}
              icon="💥"
              color="danger"
              state={Moods.Boom}
            />

            <IconWithText
              onPress={onMoodSubmit}
              icon="😞"
              color="primary"
              state={Moods.Down}
            />

            <IconWithText
              onPress={onMoodSubmit}
              icon="😊"
              color="info"
              state={Moods.Fine}
            />

            <IconWithText
              onPress={onMoodSubmit}
              icon="😄"
              color="success"
              state={Moods.Happy}
            />
          </View>
        </Center>
      )}
    </Layout>
  );
}

const IconWithText = ({
  icon,
  state,
  color,
  onPress,
}: {
  color: EvaStatus;
  icon?: string;
  state: Moods;
  onPress?: (state: Moods) => void;
}) => {
  return (
    <Button
      style={{ margin: 10, justifyContent: "flex-start", width: "80%" }}
      size="giant"
      status={color}
      onLongPress={() => onPress?.(state)}
      accessoryLeft={<Text category={"h3"}>{MoodsEmojiMap[state]}</Text>}
    >
      <Text category={"h2"}>{state}</Text>
    </Button>
  );
};

const Center = (
  { children, style, ...rest }: { children: React.ReactNode } & ViewProps,
  h: string
) => (
  <View
    style={[
      {
        justifyContent: "center",
        alignItems: "center",
      },
      style,
    ]}
    {...rest}
  >
    {children}
  </View>
);
