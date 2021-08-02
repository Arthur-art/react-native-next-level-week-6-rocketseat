import { StyleSheet } from "react-native";
import { theme } from "../../../theme";
const { heading } = theme.colors
const { text400, title700 } = theme.fonts
export const style = StyleSheet.create({
    container: {

    },
    banner: {
        width: "100%",
        height: 240,
        justifyContent: "flex-end"
    },
    title: {
        color: heading,
        fontSize: 30,
        fontFamily: title700
    },
    description: {
        color: heading,
        fontSize: 20,
        fontFamily: text400
    }
})