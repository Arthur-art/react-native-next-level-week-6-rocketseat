import React from "react";
import { StatusBar } from "react-native";
import { Signin } from "./src/screens/Signin";
import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import { Rajdhani_500Medium, Rajdhani_700Bold } from "@expo-google-fonts/rajdhani";
import AppLoading from "expo-app-loading"
import { Home } from "./src/screens/Home";
import { Routes } from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
      />
      <Routes />
    </>
  );
}

