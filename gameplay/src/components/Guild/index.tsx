import React from "react";
import { TouchableOpacityProps, View, TouchableOpacity } from "react-native";
import { style } from "./style";

type PropsItem = {
    id: string;
    name: string;
    icon: string | null,
    owner: boolean;
}

type Props = TouchableOpacityProps & {
    data: PropsItem
}

export function Guild({ data, ...rest }: Props) {

    return (
        <TouchableOpacity {...rest} style={style.container}>

        </TouchableOpacity>
    )
}