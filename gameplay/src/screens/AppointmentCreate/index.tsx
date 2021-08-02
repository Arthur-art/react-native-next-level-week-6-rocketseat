import React from "react";
import { ImageBackground, View, Text } from "react-native";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { Fontisto } from "@expo/vector-icons"
import { BorderlessButton, FlatList } from "react-native-gesture-handler";
import { theme } from "../../../theme";
import BannerPng from "../../assets/banner.png"
import { style } from "./style"
import { ListHeader } from "../../components/ListHeader";
import { ListDivider } from "../../components/ListDivider";
import { Member } from "../../components/Member";
import { ButtonIcon } from "../../components/ButtonIcon";



export function AppointmentsCreate() {
    const { primary } = theme.colors

    const handleAppointmentsDetails = () => {
        console.log("")
    }

    return (
        <Background>
            <Header
                title="Detalhes"
            />

            {/* <View style={style.footer}>
                <ButtonIcon title={"Entrar na partida"} />
            </View> */}
        </Background>
    )
}