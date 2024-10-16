import { useState } from "react";
import Home from "./screens/Home";
import Liked from "./screens/Liked";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function App() {
  const [liked, setLiked] = useState([]);
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home">
          {(props) => <Home {...props} liked={liked} setLiked={setLiked} />}
        </Tab.Screen>
        <Tab.Screen name="Liked">
          {(props) => <Liked {...props} liked={liked} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
