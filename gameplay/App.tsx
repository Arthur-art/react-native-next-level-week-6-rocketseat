import React from "react"
import { View, Text, StyleSheet } from "react-native"

export default function App() {
  return (
    <View style={style.container}>
      <Text>React Native</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
})