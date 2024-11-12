import { useState } from "react";
import Home from "./screens/Home";
import Liked from "./screens/Liked";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import About from "./screens/About.js";
import { ThemeProvider } from "./hooks/ContextStore";
import Profile from "./screens/Profile.js";
import Notif from "./screens/Notification.js";
export default function App() {
  const [data, setData] = useState([]);
  const Tab = createBottomTabNavigator();

  return (
    <ThemeProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home">
            {(props) => <Home {...props} data={data} setData={setData} />}
          </Tab.Screen>
          <Tab.Screen name="Liked">
            {(props) => <Liked {...props} data={data} setData={setData} />}
          </Tab.Screen>
          <Tab.Screen name="About">
            {(props) => <About {...props} />}
          </Tab.Screen>
          {/*  <Tab.Screen name="Profile">
            {(props) => <Profile {...props} />}
          </Tab.Screen> */}
          <Tab.Screen name="Notif">
            {(props) => <Notif {...props} />}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
