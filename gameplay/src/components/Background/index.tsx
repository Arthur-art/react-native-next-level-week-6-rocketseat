import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient"
import { style } from "./style"
import { theme } from "../../../theme";

type Props = {
    children: ReactNode
}

export function Background({ children }: Props) {

    return (
        <LinearGradient
            style={style.container}
            colors={[theme.colors.secondary80, theme.colors.secondary100]}>
            {children}
        </LinearGradient>
    )
}