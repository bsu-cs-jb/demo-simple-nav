import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainView from "./MainView";
import SecondView from "./SecondView";

// This type specifies what route parameters each Screen
// in our Stack requires. Since we are not using route
// parameters, we can set the type to undefined
// See https://reactnavigation.org/docs/typescript/
export type NavDemoStackRouteParamList = {
  Main: undefined;
  Second: undefined;
};

// Create the component that will be used to manage this "stack"
// of UI screens, pass in the type for each Screen in our Stack
const NavDemoStack = createStackNavigator<NavDemoStackRouteParamList>();

export default function NavDemo() {
  return (
    <NavigationContainer>
      <NavDemoStack.Navigator initialRouteName="Main">
        <NavDemoStack.Screen name="Main" component={MainView} />
        <NavDemoStack.Screen name="Second" component={SecondView} />
      </NavDemoStack.Navigator>
    </NavigationContainer>
  );
}
