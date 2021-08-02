import { StyleSheet } from "react-native"
import { theme } from "../../../theme"

const { heading } = theme.colors;
const { title700, text400 } = theme.fonts

export const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "flex-end",
        width: "100%"
    },
    containerText: {
        marginLeft: "10%",
    },
    title: {
        color: heading,
        fontFamily: title700,
        fontSize: 16
    },
    status: {

    },
    statusText: {
        color: heading,
        fontFamily: text400
    }
})