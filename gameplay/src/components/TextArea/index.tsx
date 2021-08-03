import React from "react";
import { View, TextInput, TextInputProps } from "react-native"
import { style } from "./style";

type Props = TextInputProps & {

}

export function TextArea({ ...rest }: Props) {

    return (
        <TextInput style={style.container} {...rest} />
    )
}