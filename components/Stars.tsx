import React from "react";
import LottieView from "lottie-react-native";
import { View } from "react-native";
import { Text } from "@ui-kitten/components";

export function Star() {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LottieView
        source={require("../assets/fine.json")}
        autoPlay
        style={{
          width: 270,
          height: 280,
        }}
        resizeMode="contain"
      />

      <Text category={"h1"}>Almost There!</Text>
      <LottieView
        source={require("../assets/heart.json")}
        autoPlay
        style={{
          width: 90,
          height: 90,
        }}
        resizeMode="contain"
        loop={true}
      />
    </View>
  );
}
