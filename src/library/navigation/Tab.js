import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform, StyleSheet } from "react-native";

import Screens from "./Screens";
import SetIcon from "./SetIcon";
import res from "res/R";

const HomeTab = createBottomTabNavigator();

const HomeTabScreens = () => (
  <HomeTab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => (
        <SetIcon route={route} focused={focused} color={color} size={30} />
      ),
      tabBarActiveTintColor: "#FFFFFF",
      tabBarInactiveTintColor: "#919191",
      tabBarLabelStyle: {
        fontSize: 14,
        fontFamily: "Calibri",
        fontWeight: "bold",
        marginBottom: 10
      },
      // tabBarStyle: [
      //   {
      //     "display": "flex"
      //   },
      //   null
      // ]
      tabBarStyle: {
        bottom: 0,
        // paddingVertical: Platform.OS === 'ios' ? 20 : 0,
        height: 100,
        backgroundColor: res.colors.backgroundColorHeader
      }
    })}
  >
    <HomeTab.Screen
      name="Main"
      component={Screens.MainScreen}
      options={{ tabBarLabel: "Formularios", headerShown: false }} />
    <HomeTab.Screen
      name="Profile"
      component={Screens.ProfileScreen}
      options={{ tabBarLabel: "Mi Cuenta" }} />
  </HomeTab.Navigator>
);

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'red',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,

  }
});

export default HomeTabScreens;
