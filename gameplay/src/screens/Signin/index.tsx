import React from "react"
import { View, StyleSheet, Text, TextInput, Image, StatusBar } from "react-native"
import { style } from "./styles";
import ilustrationPng from "../../assets/illustration.png"
import { ButtonIcon } from "../../components/ButtonIcon";
import { useNavigation } from "@react-navigation/core";
import { Background } from "../../components/Background";

export function Signin() {

    const navigation = useNavigation();

    const handleSignin = () => {
        navigation.navigate('Home')
    }

    return (
        <Background>
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
                <ButtonIcon onPress={handleSignin} activeOpacity={0.7} title={"Entrar com o Discord"} />
            </View>
        </Background>
    );
}

