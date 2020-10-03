import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Register from "./pages/Register";
import Login from "./pages/Login";

import Modal from './pages/Modal';

export default function Routes() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Modal" component={Modal} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

