import React, { ReactNode } from "react";
import { View, Text, Modal, ModalProps } from "react-native";
import { Background } from "../Background";
import { style } from "./style"

type Props = ModalProps & {
    children: ReactNode;
}

export function ModalView({ children, ...rest }: Props) {

    return (
        <Modal
            transparent
            animationType="slide"
            {...rest}
        >
            <View style={style.overlay}>
                <View style={style.container}>

                    <View style={style.bar} />
                    <Background>
                        {children}
                    </Background>
                </View>
            </View>
        </Modal>
    )
}