import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { Signin } from "./src/screens/signin/"
import { global } from "../gameplay/global";

export default function App() {
  return (
    <View style={global.container}>
      <Signin />
    </View>
  );
}

