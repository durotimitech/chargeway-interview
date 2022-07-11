import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "./screens/Profile";
import OrderHistory from "./screens/OrderHistory";
import PaymentMethods from "./screens/PaymentMethods";

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"Profile"} component={ProfileScreen} />
        <Stack.Screen name={"Order History"} component={OrderHistory} />
        <Stack.Screen name={"Payment Methods"} component={PaymentMethods} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
