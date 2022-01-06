import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NativeBaseProvider, Box, extendTheme } from "native-base";
import { Mood } from "./Screen/Mood";
import { QueryClient, QueryClientProvider } from "react-query";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { scheduleNotification } from "./utils/notifications";
import { useEffect } from "react";

const queryClient = new QueryClient();

const theme = extendTheme({
  colors: {
    // Add new color
    primary: {
      50: "#fff8e1",
      100: "#ffecb3",
      200: "#ffe082",
      300: "#ffd54f",
      400: "#ffca28",
      500: "#ffc107",
      600: "#ffb300",
      700: "#ffa000",
      800: "#ff8f00",
      900: "#ff6f00",
    },
  },
  components: {
    IconButton: {
      baseStyle: {
        borderRadius: 100,
      },
    },
  },
});

export default function App() {
  useEffect(() => {
    scheduleNotification();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NativeBaseProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <SafeAreaProvider>
            <SafeAreaView>
              <Mood />
            </SafeAreaView>
          </SafeAreaProvider>
        </QueryClientProvider>
      </NativeBaseProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
