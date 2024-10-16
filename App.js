import { useState } from "react";
import Home from "./screens/Home";
import Liked from "./screens/Liked";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function App() {
  const [data, setData] = useState([]);
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home">
          {(props) => <Home {...props} data={data} setData={setData} />}
        </Tab.Screen>
        <Tab.Screen name="Liked">
          {(props) => <Liked {...props} data={data} setData={setData} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
