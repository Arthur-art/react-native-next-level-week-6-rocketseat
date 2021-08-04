import React from "react";
import { TouchableOpacityProps, TouchableOpacity, View, Text } from "react-native";
import { GuildIcon } from "../GuildIcon";
import { style } from "./style";
import { Feather } from "@expo/vector-icons"
import { theme } from "../../../theme";

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
        <TouchableOpacity {...rest} activeOpacity={0.7} style={style.container}>
            <GuildIcon />
            <View style={style.content}>
                <View style={style.text}>
                    <Text style={style.title}>{data.name}</Text>
                    <Text style={style.type}>{data.owner ? "Administrador" : "Convidado"}</Text>
                </View>
            </View>
            <Feather
                name="chevron-right"
                color={theme.colors.heading}
                size={24}

            />
        </TouchableOpacity>
    )
}