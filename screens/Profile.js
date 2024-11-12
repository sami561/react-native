import { View } from "react-native";
import { ThemeContext } from "../hooks/ContextStore";
import { useContext } from "react";
import { dark, light } from "../theme/Colors";
const Profile = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  console.log("🚀 ~ Profile ~ isDarkTheme:", isDarkTheme);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isDarkTheme ? dark.background : light.background,
      }}
    ></View>
  );
};

export default Profile;
