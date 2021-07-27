import React from "react";
import { Text, View } from "react-native";
import { style } from "./style"

export function Home() {

    return (
        <View style={style.container}>
            <View style={style.header}>
                <Text style={style.title}>Header</Text>
            </View>
        </View>
    )
}