import React from "react";
import { Text, View } from "react-native";
import { style } from "./style"
import { Profile } from "../../components/Profile"
import { ButtonAdd } from "../../components/ButtonAdd";

export function Home() {

    return (
        <View style={style.container}>
            <View style={style.header}>
                <Profile />
            </View>
            <ButtonAdd />
        </View>
    )
}