import React from "react";
import LottieView from "lottie-react-native";
import { View } from "react-native";
import { Text } from "@ui-kitten/components";

export function Happy() {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 5,
      }}
    >
      <LottieView
        source={require("../assets/happy.json")}
        autoPlay
        style={{
          width: 260,
          height: 260,
        }}
        loop={false}
        resizeMode="contain"
      />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text category={"h2"}>You are amazing!</Text>
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
    </View>
  );
}
