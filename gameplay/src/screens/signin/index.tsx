import React, { useState } from "react"
import { View, StyleSheet, Text, TextInput, Image } from "react-native"
import { style } from "./styles";
import ilustrationPng from "../../assets/illustration.png"

export function Signin() {
    const [text, setText] = useState("")
    return (
        <View>
            <Image source={ilustrationPng}/>
            <Text>{text}</Text>
            <TextInput onChangeText={(value) => setText(value)} style={style.input} />
        </View>
    );
}

    