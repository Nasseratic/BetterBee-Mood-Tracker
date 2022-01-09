import { Button, ButtonGroup, Layout, Text } from "@ui-kitten/components";
import React, { useState } from "react";
import LottieView from "lottie-react-native";
import { View } from "react-native";

const list = [
  {
    text: `Once Upon a time,\nThere was a very beautiful princess called Boras, she was married to a noble man and living with him in his big castle in the kingdom of Ocatobras. \n
    They were happy until an evil wizard from the Kingdom of Inouches casted a spell on the lovely princess. The spell was to destroy the castle and the whole kingdom by making Boras fall in deep sadness. Boras was so scared that she will never be happy again.`,
    lottie: require("../assets/story/1.json"),
  },
  {
    text: `Her husband, didn't sleep for days and nights thinking and searching to find a way to save is lovely wife.\n\n     Finally after searching in a very ancient book, he found a way to save her with a magic potion.\n \n      He traveled to the kingdom of Lenuos and found a witch who had the ingredients to make the potion. He asked her to make the potion for him and ask for any amount of money she wish.`,
    lottie: require("../assets/story/3.json"),
  },
  {
    text: `But she said that there is one ingredient that was missing, which the tooth of a dragon. And that if he could get and th rest of the dragon head she will make the potion with no cost.\n\n      He asked her about how to find that dragon. He had no choice but to go to the kingdom of Inouches were the dragon lives. He found the dragon on a cave in a big mountain and after a long battle with it, he finally killed it.\n`,
    lottie: require("../assets/story/4.json"),
  },
  {
    text: `He went back to the witch, and gave her the head of the dragon, she stored it and then started to work on the potion. \n\n     After putting very many ingredients in the potion, she made it and gave it to him. He took it and got back to the castle to give the potion to the princess.\n`,
    lottie: require("../assets/story/5.json"),
  },
  {
    text: `The princess was so happy that finally she have a chance to be happy again.\n\n     The spell was so powerful and that's why she had to take a sip everyday at 8pm to be happy again and totally recover.\n\n      After a few months, she and her husband was so happy more than ever. and lived happily ever after.`,
    lottie: require("../assets/story/6.json"),
  },
  {
    text: `Her husband behind the scenes...\n\nHello my princess :)\n\nI started working on the application on the airport. As I won't be physically around, I really wanted to create something to make it easy for you to tack your mood and to keep it up.\n\nNote: Every line of code is written from my heart.\n\nI hope you like it :D`,
    lottie: require("../assets/story/7.json"),
  },
];

export const Story = ({ onStart }: { onStart: VoidFunction }) => {
  const [index, setIndex] = useState(0);
  const next = () => index < list.length && setIndex(index + 1);
  const back = () => index > 0 && setIndex(index - 1);

  return (
    <Layout
      style={{ height: "100%", justifyContent: "center", alignItems: "center" }}
    >
      <View style={{ flexGrow: 1, alignItems: "center" }}>
        <LottieView
          source={list[index].lottie}
          autoPlay
          style={{
            width: 300,
            height: 300,
            maxWidth: "100%",
          }}
          loop={false}
          resizeMode="contain"
        />

        <Text
          style={{ padding: 15, marginTop: 30, fontSize: 15 }}
          category={"p1"}
        >
          {list[index].text}
        </Text>
      </View>

      {index < list.length - 1 ? (
        <ButtonGroup>
          <Button onPress={back} disabled={index == 0}>
            Back
          </Button>
          <Button onPress={next} disabled={index === list.length - 1}>
            Next
          </Button>
        </ButtonGroup>
      ) : (
        <Button size={"large"} onPress={onStart}>
          Getting Started
        </Button>
      )}
    </Layout>
  );
};
