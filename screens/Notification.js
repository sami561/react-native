import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import * as Notifications from "expo-notifications";
import { useEffect } from "react";

export default function Notification() {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });
  const sendNotification = async () => {
    console.log("Notification Sent");
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
      <TouchableOpacity style={styles.button} onPress={sendNotification}>
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
