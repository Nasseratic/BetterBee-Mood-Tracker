import { setHours } from "date-fns";
import * as Notifications from "expo-notifications";
import { Alert } from "react-native";

export const scheduleNotification = async () => {
  const { status } = await Notifications.requestPermissionsAsync();
  //   Alert.alert(status);
  if (status !== "granted") {
    return;
  }

  try {
    let notificationId = await Notifications.scheduleNotificationAsync({
      content: {
        title: "Did you Log yesterday's Mood?",
      },
      trigger: {
        hour: 12,
        date: setHours(new Date(), 8),
        repeats: true,
      },
    });
    // Alert.alert(notificationId);
  } catch (error) {
    // Alert.alert(`error: ${error}`);
  }
};
