import React, { ReactNode } from "react";
import { View, Modal, ModalProps, TouchableWithoutFeedback } from "react-native";
import { Background } from "../Background";
import { style } from "./style"

type Props = ModalProps & {
    children: ReactNode;
    closeModal: () => void;
}

export function ModalView({ closeModal, children, ...rest }: Props) {

    return (
        <Modal
            statusBarTranslucent
            transparent
            animationType="slide"
            {...rest}
        >
            <TouchableWithoutFeedback onPress={closeModal}>
                <View style={style.overlay}>
                    <View style={style.container}>

                        <View style={style.bar} />
                        <Background>
                            {children}
                        </Background>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}