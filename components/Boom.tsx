import React from "react";
import LottieView from "lottie-react-native";
import { View } from "react-native";
import { Text } from "@ui-kitten/components";

export function Boom() {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 5,
      }}
    >
      <LottieView
        source={require("../assets/boom.json")}
        autoPlay
        style={{
          width: 300,
          height: 300,
        }}
        speed={0.7}
        loop
        resizeMode="contain"
      />
      <Text category={"h1"}>Emergency!</Text>
    </View>
  );
}
