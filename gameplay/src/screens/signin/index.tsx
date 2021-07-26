import React, { useState } from "react"
import { View, StyleSheet, Text, TextInput } from "react-native"
import { style } from "./styles";

export function Signin() {
    const [text, setText] = useState("")
    return (
        <View>
            <Text>{text}</Text>
            <TextInput onChangeText={(value) => setText(value)} style={style.input} />
        </View>
    );
}

    