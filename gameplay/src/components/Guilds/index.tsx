import React from "react";
import { View } from "react-native"
import { FlatList } from "react-native-gesture-handler";
import { GuildProps } from "../Appointments";
import { Guild } from "../Guild";
import { ListDivider } from "../ListDivider";
import { style } from "./style";

export const guilds = [
    {
        id: "1",
        name: "Lendários",
        icon: "true",
        owner: true
    },
    {
        id: "2",
        name: "Lendários",
        icon: "true",
        owner: true
    },
    {
        id: "3",
        name: "Lendários",
        icon: "true",
        owner: true
    },
    {
        id: "4",
        name: "Lendários",
        icon: "true",
        owner: true
    },
    {
        id: "5",
        name: "Lendários",
        icon: "true",
        owner: true
    },
    {
        id: "6",
        name: "Lendários",
        icon: "true",
        owner: true
    },
    {
        id: "7",
        name: "Lendários",
        icon: "true",
        owner: true
    },
    {
        id: "8",
        name: "Lendários",
        icon: "true",
        owner: true
    },
]

type Props = {
    handleGuildSelected: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelected }: Props) {

    return (
        <View style={style.container}>
            <FlatList
                contentContainerStyle={{paddingBottom: 50}}
                data={guilds}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Guild
                        onPress={() => handleGuildSelected(item)}
                        data={item} />
                )}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <ListDivider />}
                style={style.guilds}
            />

        </View>
    )
}