import React from "react"
import { View, StyleSheet, Text, TextInput, Image, StatusBar } from "react-native"
import { style } from "./styles";
import ilustrationPng from "../../assets/illustration.png"
import { ButtonIcon } from "../../components/ButtonIcon";

export function Signin() {
    return (
        <View style={style.container}>
            <Image resizeMode={"stretch"} source={ilustrationPng} />
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
            <ButtonIcon activeOpacity={0.7} title={"Entrar com o Discord"} />
        </View>
    );
}

