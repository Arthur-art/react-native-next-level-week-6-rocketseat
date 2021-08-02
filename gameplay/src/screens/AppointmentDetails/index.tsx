import React from "react";
import { ImageBackground, View, Text } from "react-native";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { Fontisto } from "@expo/vector-icons"
import { BorderlessButton } from "react-native-gesture-handler";
import { theme } from "../../../theme";
import BannerPng from "../../assets/banner.png"
import { style } from "./style"

export function AppointmentsDetails() {
    const { primary } = theme.colors
    return (
        <Background>
            <Header
                title="Detalhes"
                action={
                    <BorderlessButton>
                        <Fontisto name="share" size={24} color={primary} />
                    </BorderlessButton>
                }
            />
            <ImageBackground
                source={BannerPng}
                style={style.banner}
            >

                <Text style={style.title}>Lendários</Text>
                <Text style={style.description}>
                    Saga challenger do yodismo, do challenger ao bronze em 1 semana
                </Text>

            </ImageBackground>
        </Background>
    )
}