import React from "react";
import LottieView from "lottie-react-native";
import { View } from "react-native";
import { Text } from "@ui-kitten/components";

export function DoIt() {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 5,
      }}
    >
      <LottieView
        source={require("../assets/doit.json")}
        autoPlay
        style={{
          width: 200,
          height: 200,
        }}
        loop={false}
        resizeMode="contain"
      />
      <Text category={"h2"}>Just do it 💪</Text>
    </View>
  );
}
