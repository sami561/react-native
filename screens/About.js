import React, { useContext } from "react";
import { View, Text } from "react-native";
import { Switch } from "react-native-paper";
import { ThemeContext } from "../hooks/ContextStore";
import { dark, light } from "../theme/Colors";

const About = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: isDarkTheme ? dark.background : light.background,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          marginBottom: 20,
          color: isDarkTheme ? dark.text : light.text,
        }}
      >
        {isDarkTheme ? "Dark Mode" : "Light Mode"}
      </Text>
      <Switch
        value={isDarkTheme}
        onValueChange={toggleTheme}
        color={isDarkTheme ? dark.switchColor : light.switchColor} // Optional: Adjust the switch color based on the theme
      />
    </View>
  );
};

export default About;
