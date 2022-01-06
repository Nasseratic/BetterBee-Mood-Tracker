import React from "react";
import LottieView from "lottie-react-native";
import { Box, HStack, Text, View, VStack } from "native-base";

export function Boom() {
  return (
    <VStack justifyContent={"center"} alignItems={"center"} mt={5}>
      <LottieView
        source={require("../assets/bomb.json")}
        autoPlay
        style={{
          width: 200,
          height: 200,
        }}
        loop
        resizeMode="contain"
      />
      <Text bold fontSize="3xl" mt={5} color={"gray.900"} textAlign={"center"}>
        Emergency! 🏃
      </Text>
    </VStack>
  );
}
