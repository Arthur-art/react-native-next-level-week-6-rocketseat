import React from "react"
import { View, Text } from "react-native"
import { style } from "./style"

type Props = {
    title: string;
    subtitle: string;
}

export function ListHeader({ subtitle, title }: Props) {

    return (
        <View style={style.container}>
            <Text style={style.title}>
                {title}
            </Text>

            <Text style={style.subtitle}>
                {subtitle}
            </Text>
        </View>
    )
}