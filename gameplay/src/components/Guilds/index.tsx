import React from "react";
import { View } from "react-native"
import { FlatList } from "react-native-gesture-handler";
import { Guild } from "../Guild";
import { ListDivider } from "../ListDivider";
import { style } from "./style";

export const guilds = [
    {
        id: "1",
        name: "Lendários",
        icon: "icon",
        owner: true
    },
]

export function ModalGuilds() {

    return (
        <View style={style.container}>
            <FlatList
                data={guilds}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Guild data={item} />
                )}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <ListDivider />}
                style={style.guilds}
            />

        </View>
    )
}