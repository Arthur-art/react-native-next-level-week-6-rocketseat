import React from "react";
import { View, Text } from "react-native"
import { RectButton, RectButtonProps } from "react-native-gesture-handler"
import { GuildIcon } from "../GuildIcon";
import { style } from "./style";

export type GuildProps = {

}

export type AppointmentsProps = {
    id: string;
    guild: GuildProps;
    category: string;
    date: string;
    description: string;
}

type Props = RectButtonProps & {
    data: AppointmentsProps
}

export function Appointments({ data, ...rest }: Props) {

    return (
        <RectButton {...rest}>
            <View style={style.container}>
                <GuildIcon />
            </View>
        </RectButton>
    )
}