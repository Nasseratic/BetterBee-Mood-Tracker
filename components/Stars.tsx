import React from "react";
import LottieView from "lottie-react-native";
import { Box, HStack, Text, View, VStack } from "native-base";

export function Star() {
  return (
    <VStack justifyContent={"center"} alignItems={"center"} mt={-100}>
      <LottieView
        source={require("../assets/stara.json")}
        autoPlay
        style={{
          width: 400,
          height: 400,
        }}
        resizeMode="center"
        loop={false}
      />
      <HStack
        alignItems={"center"}
        justifyContent={"center"}
        mt={-100}
        mr={-35}
      >
        <Text bold fontSize="4xl" color={"gray.900"} mr={-4}>
          Great Job!
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
