import React from "react"
import { Image, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { style } from "./style"
import { theme } from "../../../theme"

interface Props{
    urlImage: string;
}

export function Avatar({urlImage}:Props) {

    return (
        <LinearGradient style={style.container}
            colors={[theme.colors.secondary80, theme.colors.secondary100]}>
                <Image source={{uri: urlImage}} style={style.avatar} />
        </LinearGradient>
    )
}