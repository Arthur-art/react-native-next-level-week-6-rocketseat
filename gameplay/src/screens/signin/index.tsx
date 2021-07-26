import React, { useState } from "react"
import { View, StyleSheet, Text, TextInput, Image } from "react-native"
import { style } from "./styles";
import ilustrationPng from "../../assets/illustration.png"

export function Signin() {
    const [text, setText] = useState("")
    return (
        <View style={style.container}>
            <Image source={ilustrationPng} />
            <View style={style.content}>
                <Text>
                Hello World{`\n`}
                React-Native{`\n`}
                Rocketseat
                </Text>
            </View>
        </View>
    );
}

