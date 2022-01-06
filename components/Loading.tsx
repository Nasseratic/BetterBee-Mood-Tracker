import React from "react";
import LottieView from "lottie-react-native";
import { Box, Text, View } from "native-base";

export function Loading() {
  return (
    <Box>
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
      <Text bold fontSize="2xl" color={"gray.900"} textAlign="center">
        Loading...
      </Text>
    </Box>
  );
}
