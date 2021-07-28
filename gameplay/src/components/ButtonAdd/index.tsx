import React from "react"
import { RectButton, RectButtonProps } from "react-native-gesture-handler"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { style } from "./style";
import { theme } from "../../../theme";

export function ButtonAdd({ ...rest }: RectButtonProps) {

    return (
        <RectButton
            style={style.container}
            {...rest}
        >
            <MaterialCommunityIcons name="plus" color={theme.colors.heading} size={24} />
        </RectButton>
    );
}