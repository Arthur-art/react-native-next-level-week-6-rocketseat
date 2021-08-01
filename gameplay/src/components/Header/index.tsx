import React, { ReactNode } from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient"
import { theme } from "../../../theme";
import { BorderlessButton } from "react-native-gesture-handler"
import { Feather } from "@expo/vector-icons"
import { style } from "./style"

type Props = {
    title: string;
    action?: ReactNode;
}

export function Header({ title, action }: Props) {
    const { secondary100, secondary40, heading } = theme.colors;

    return (
        <LinearGradient
            style={style.constainer}
            colors={[secondary100, secondary40]}
        >
            <BorderlessButton>
                <Feather
                    name={"arrow-left"}
                    size={24}
                    color={heading}
                />
            </BorderlessButton>

            <Text style={style.title}>
                {title}
            </Text>

            {action && <View>{action}</View>}
        </LinearGradient>
    )
}