import React from "react";
import LottieView from "lottie-react-native";
import { View } from "react-native";
import { Text } from "@ui-kitten/components";

export function Down() {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 5,
      }}
    >
      <LottieView
        source={require("../assets/sad.json")}
        autoPlay
        style={{
          width: 340,
          height: 340,
        }}
        loop
        resizeMode="contain"
      />
      <Text category={"h2"}>Be Happy Bee!</Text>
    </View>
  );
}
