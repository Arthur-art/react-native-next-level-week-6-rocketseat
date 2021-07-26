import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { Signin } from "./src/screens/Signin"
import { global } from "../gameplay/global";

export default function App() {
  return (
    <View style={global.container}>
      <Signin />
    </View>
  );
}

