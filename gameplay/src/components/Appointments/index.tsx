import React from "react";
import { View, Text } from "react-native"
import { SvgProps } from "react-native-svg"
import { RectButton, RectButtonProps } from "react-native-gesture-handler"
import { theme } from "../../../theme";
import { categories } from "../../utils/categories";
import { GuildIcon } from "../GuildIcon";
import PlayerSvg from "../../assets/player.svg"
import { style } from "./style";
import CalendarSvg from "../../assets/calendar.svg"


export type GuildProps = {
    id: string;
    name: string;
    icon: React.FC<SvgProps>;
    owner: boolean;
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
    const { icon, id, name, owner } = data.guild
    return (
        <RectButton {...rest}>
            <View style={style.container}>
                <GuildIcon />
                <View style={style.content}>
                    <View style={style.header}>
                        <Text style={style.title}>
                            {name}
                        </Text>
                        <Text style={style.category}>
                            {category.title}
                        </Text>
                    </View>

                    <View style={style.footer}>
                        <View>
                            <CalendarSvg />
                            <Text style={style.dateInfo}>
                                {data.date}
                            </Text>
                        </View>


                        <View style={style.playerInfo}>
                            <PlayerSvg fill={owner ? theme.colors.primary : theme.colors.on} />
                            <Text style={[style.player,
                            { color: owner ? theme.colors.primary : theme.colors.on }]}>
                                {owner ? "Anfitrião" : "Visitante"}
                            </Text>
                        </View>

                    </View>

                </View>
            </View>
        </RectButton>
    )
}