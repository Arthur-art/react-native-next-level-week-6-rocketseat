import React from "react";
import { View, Text, Image, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { style } from "./style"
import discordImage from "../../assets/discord.png"

type Props = TouchableOpacityProps & {
    title: string;
}

export function ButtonIcon({ title, ...rest }: Props) {
    return (
        <TouchableOpacity {...rest}  style={style.container}>
            <View style={style.iconWrapper}>
                <Image source={discordImage} />
            </View>

            <Text style={style.title}>{title}</Text>
        </TouchableOpacity>
    );
}