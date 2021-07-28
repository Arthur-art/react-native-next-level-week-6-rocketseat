import React from "react"
import { RectButton, RectButtonProps } from "react-native-gesture-handler"
import { SvgProps } from "react-native-svg"
import { LinearGradient } from "expo-linear-gradient"
import { theme } from "../../../theme"
import { style } from "./style"
import { View, Text } from "react-native"

type Props = RectButtonProps & {
    title: string;
    icon: React.FC<SvgProps>;
    checked: boolean;
}

export function Category({
    title,
    icon: Icon,
    checked = false,
    ...rest
}: Props) {

    return (
        <RectButton {...rest}>
            <LinearGradient
                style={style.container}
                colors={[theme.colors.secondary50, theme.colors.secondary70]}>

                <View style={[style.content, { opacity: checked ? 1 : 0.4 }]}>
                    <View style={[checked ? style.checked : style.check]}>
                        <Icon width={48} height={48} />
                    </View>
                    <Text style={style.title}>{title}</Text>
                </View>

            </LinearGradient>
        </RectButton>
    )
}