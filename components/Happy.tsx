import React from "react";
import LottieView from "lottie-react-native";
import { Box, HStack, Text, View, VStack } from "native-base";

export function Happy() {
  return (
    <VStack justifyContent={"center"} alignItems={"center"} mt={5}>
      <LottieView
        source={require("../assets/happy.json")}
        autoPlay
        style={{
          width: 140,
          height: 140,
        }}
        loop={false}
        resizeMode="contain"
      />
      <HStack alignItems={"center"} justifyContent={"center"} mr={-35}>
        <Text bold fontSize="4xl" color={"gray.900"} mr={-3}>
          The Queen!
        </Text>
        <LottieView
          source={require("../assets/heart.json")}
          autoPlay
          style={{
            width: 70,
            height: 70,
          }}
          resizeMode="contain"
          loop={true}
        />
      </HStack>
    </VStack>
  );
}
