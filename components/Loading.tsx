import React from "react";
import LottieView from "lottie-react-native";
import { View } from "react-native";
import { Text } from "@ui-kitten/components";

export function Loading() {
  return (
    <View
      style={{
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LottieView
        source={require("../assets/bee.json")}
        autoPlay
        style={{
          width: 400,
          height: 400,
        }}
        resizeMode="contain"
        loop={false}
      />
      <Text category={"h3"}>Loading...</Text>
    </View>
  );
}
