import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "react-native-splash-screen";
import auth from "@react-native-firebase/auth";
import res from "res/R";

import Screens from "./Screens";
const Stack = createNativeStackNavigator();
import TabList from "./Tab";

export default function App(props) {
  useEffect(() => {
    if (auth().currentUser) {
      SplashScreen.hide();
    } else {
      auth()
        .signInAnonymously()
        .then((user) => {
          console.log(user);
          SplashScreen.hide();
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, []);

  return (
    <>
      {props.currentUser != null ? (
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
            headerTransparent: false,
            title: null,
            headerStyle: {
              backgroundColor: res.colors.backgroundColorHeader,
            },
            headerTintColor: res.colors.headerTintColor,
            headerTitleStyle: res.palette.titleHeader,
            headerBackTitle: "Regresar",
          }}
        >
          <Stack.Screen
            name="Start"
            component={TabList}
            options={{
              headerShown: false,
              headerTransparent: true,
              title: null,
            }}
          />
          <Stack.Screen
            name="FormExecute"
            component={Screens.FormExecuteScreen}
            options={({ route }) => ({ title: route.params.data.name })}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="SignIn" component={Screens.LoginScreen} />
        </Stack.Navigator>
      )}
    </>
  );
}
