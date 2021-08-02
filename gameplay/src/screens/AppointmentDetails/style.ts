import { StyleSheet } from "react-native";
import { theme } from "../../../theme";
const { heading } = theme.colors
export const style = StyleSheet.create({
    container: {

    },
    banner: {
        width: "100%",
        height: 240
    },
    title: {
        color: heading,
        fontSize: 20
    },
    description: {
        color: heading,
        fontSize: 15
    }
})