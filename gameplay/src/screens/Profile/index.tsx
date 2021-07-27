import React from "react";
import { View, Text } from "react-native"
import { style } from "./style";

export function Profile() {

    return (
        <View style={style.container}>
            <View>
                <View>
                    <Text style={style.greeting}>
                        Olá
                    </Text>
                    <Text style={style.username}>
                        Arthur
                    </Text>
                </View>
            </View>

        </View>
    )
}