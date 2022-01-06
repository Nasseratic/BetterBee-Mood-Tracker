import React from "react";
import LottieView from "lottie-react-native";
import { Box, HStack, Text, View, VStack } from "native-base";

export function Sad() {
  return (
    <VStack justifyContent={"center"} alignItems={"center"} mt={5}>
      <LottieView
        source={require("../assets/sad.json")}
        autoPlay
        style={{
          width: 140,
          height: 140,
        }}
        loop
        resizeMode="contain"
      />
      <Text bold fontSize="3xl" mt={5} color={"gray.900"} textAlign={"center"}>
        It's Gonna Be Fine!
      </Text>
    </VStack>
  );
}
