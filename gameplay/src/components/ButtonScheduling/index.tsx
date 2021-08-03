import React from "react";
import { View, Text, Image, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { style } from "./style"

type Props = TouchableOpacityProps & {
    title: string;
}

export function ButtonScheduling({ title, ...rest }: Props) {
    return (
        <TouchableOpacity {...rest} style={style.container}>
            <Text style={style.title}>{title}</Text>
        </TouchableOpacity>
    );
}