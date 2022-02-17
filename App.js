import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./components/HomeScreen";


const Tabs = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          activeTintColor: "white",
          inactiveTintColor: "gray",
          style: {
            backgroundColor: "#112232",
          },
        }}
      >
        <Tabs.Screen name="Movie Ratings" component={HomeScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default App;