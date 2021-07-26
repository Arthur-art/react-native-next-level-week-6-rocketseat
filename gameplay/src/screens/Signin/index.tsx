import React from "react"
import { View, StyleSheet, Text, TextInput, Image, StatusBar } from "react-native"
import { style } from "./styles";
import ilustrationPng from "../../assets/illustration.png"
import { ButtonIcon } from "../ButtonIcon";

export function Signin() {
    return (
        <View style={style.container}>
            <StatusBar
                barStyle="light-content"
            />
            <Image resizeMode={"stretch"} style={style.image} source={ilustrationPng} />
            <View style={style.content}>
                <Text style={style.title}>
                    Organize{`\n`}
                    suas jogatinas{`\n`}
                    facilmente
                </Text>
                <Text style={style.subtitle}>
                    Crie grupos para jogar seus games{`\n`}
                    favoritos com seus amigos
                </Text>
            </View>
            <ButtonIcon />
        </View>
    );
}

