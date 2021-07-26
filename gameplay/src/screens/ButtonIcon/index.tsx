import React from "react";
import { View, Text, Image, TouchableOpacity, TouchableOpacityBase } from "react-native"
import { style } from "./style"
import discordImage from "../../assets/discord.png"

export function ButtonIcon() {
    return (
        <TouchableOpacity style={style.container}>
            <View style={style.iconWrapper}>
                <Image source={discordImage} style={style.image}/>
            </View>

            <Text style={style.title}>Entrar com Discord</Text>
        </TouchableOpacity>
    );
}