import React from "react";
import { View, Text } from "react-native"
import { RectButton, RectButtonProps } from "react-native-gesture-handler"
import { theme } from "../../../theme";
import { categories } from "../../utils/categories";
import { GuildIcon } from "../GuildIcon";
import PlayerSvg from "../../assets/player.svg"
import { style } from "./style";

export type GuildProps = {
    owner: boolean;
    name: string;
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
    const [category] = categories.filter(item => item.id === data.category)

    return (
        <RectButton {...rest}>
            <View style={style.container}>
                <GuildIcon />
                <View style={style.content}>
                    <View style={style.header}>
                        <Text style={style.title}>
                            {data.guild.name}
                        </Text>
                        <Text style={style.category}>
                            {category.title}
                        </Text>
                    </View>
                    <View style={style.playerInfo}>
                        <PlayerSvg fill={data.guild.owner ? theme.colors.primary : theme.colors.on} />
                    </View>
                </View>
            </View>
        </RectButton>
    )
}