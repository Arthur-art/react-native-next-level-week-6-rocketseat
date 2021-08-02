import React from "react"
import { View, Text } from "react-native"
import { style } from "./style"
import { Avatar } from "../Avatar"
import { SvgProps } from "react-native-svg"

type MembersProps = {
    id: string;
    username: string;
    avatar_url: string;
    status: string;
}

type Props = {
    data: MembersProps
}

export function Member({ data }: Props) {
    const isOnline = data.status === 'online'
    console.log(isOnline)

    return (
        <View key={data.id} style={style.container}>
            <Avatar urlImage={data.avatar_url} />
            <View style={style.containerText}>
                <View>
                    <Text style={style.title}>{data.username}</Text>
                </View>
                <View style={style.status}>
                    <Text style={style.statusText}>{isOnline ? "Disponivel" : "Ausente"}</Text>
                </View>
            </View>
        </View>
    )
}