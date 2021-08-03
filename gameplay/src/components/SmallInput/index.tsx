import React from "react";
import { View, TextInput, TextInputProps } from "react-native"
import { style } from "./style";

type Props = TextInputProps & {

}

export function SmallInput({ ...rest }: Props) {

    return (
        <TextInput keyboardType="numeric" style={style.container} {...rest} />
    )
}