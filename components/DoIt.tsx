import React from "react";
import LottieView from "lottie-react-native";
import { Box, HStack, Text, View, VStack } from "native-base";

export function DoIt() {
  return (
    <VStack justifyContent={"center"} alignItems={"center"} mt={5}>
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
      <Text bold fontSize="3xl" mt={5} color={"gray.900"} textAlign={"center"}>
        Just do it 💪
      </Text>
    </VStack>
  );
}
