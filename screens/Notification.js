import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";
import * as Notifications from "expo-notifications";
import { useEffect, useState } from "react";

export default function Notification() {
  const [expoPushToken, setExpoPushToken] = useState("");
  console.log("Notification");
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });
  async function registerForPushNotificationsAsync() {
    let token;
    if (Platform.OS === "android") {
      await Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }

    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }

    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log("test", token);
    return token;
  }
  async function sendPushNotification(expoPushToken) {
    console.log("🚀 ~ sendPushNotification ~ expoPushToken:", expoPushToken);
    const message = {
      to: expoPushToken,
      sound: "default",
      title: "Hello!",
      body: "This is a test notification",
      data: { data: "data" },
    };

    await fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Accept-encoding": "gzip, deflate",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
  }
  useEffect(() => {
    console.log("🚀 ~ useEffect ~ token:");
    registerForPushNotificationsAsync()
      .then((token) => {
        return setExpoPushToken(token ?? "");
      })
      .catch((error) => {
        console.log("🚀 ~ useEffect ~ error:", error);

        return setExpoPushToken(`${error}`);
      });
  }, []);

  const sendNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Hello! 📬",
        body: "This is a local notification triggered by clicking the button.",
        data: { additionalData: "Some extra data here" },
      },
      trigger: { seconds: 1 },
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={async () => {
          await sendPushNotification(expoPushToken);
        }}
      >
        <Text style={styles.buttonText}>Notification</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});
