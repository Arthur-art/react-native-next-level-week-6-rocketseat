import React, { ReactNode } from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient"
import { theme } from "../../../theme";
import { BorderlessButton } from "react-native-gesture-handler"
import { Feather } from "@expo/vector-icons"
import { style } from "./style"
import { useNavigation } from "@react-navigation/native";

type Props = {
    title: string;
    action?: ReactNode;
}

export function Header({ title, action }: Props) {
    const { secondary100, secondary40, heading } = theme.colors;

    const navigation = useNavigation();

    const handleBack = () => {
        navigation.goBack();
    }

    return (
        <LinearGradient
            style={style.constainer}
            colors={[secondary100, secondary40]}
        >
            <BorderlessButton onPress={handleBack}>
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