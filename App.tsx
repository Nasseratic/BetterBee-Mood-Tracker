import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
// import { NativeBaseProvider, Box, extendTheme } from "native-base";
import { Mood } from "./Screen/Mood";
import { QueryClient, QueryClientProvider } from "react-query";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { scheduleNotification } from "./utils/notifications";
import { useEffect, useState } from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { customMapping, myTheme } from "./theme";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { Story } from "./Screen/Story";
import AsyncStorageLib from "@react-native-async-storage/async-storage";
import { match } from "ts-pattern";
import { Loading } from "./components/Loading";

const queryClient = new QueryClient();

export default function App() {
  const [isStory, setIsStory] = useState<boolean | null>(null);
  useEffect(() => {
    scheduleNotification();
    AsyncStorageLib.getItem("story").then((story) => {
      if (!!story) {
        setIsStory(true);
      } else setIsStory(false);
    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <IconRegistry icons={EvaIconsPack} />

      <ApplicationProvider
        {...eva}
        theme={myTheme}
        mapping={eva.mapping}
        customMapping={customMapping}
      >
        <QueryClientProvider client={queryClient}>
          <SafeAreaProvider>
            <SafeAreaView>
              {match(isStory)
                .with(null, () => <Loading />)
                .with(false, () => (
                  <Story
                    onStart={() => {
                      AsyncStorageLib.setItem("story", "true");
                      setIsStory(true);
                    }}
                  />
                ))
                .otherwise(() => (
                  <Mood />
                ))}
            </SafeAreaView>
          </SafeAreaProvider>
        </QueryClientProvider>
      </ApplicationProvider>
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
