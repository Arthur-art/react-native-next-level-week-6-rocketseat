import { StyleSheet } from "react-native"
import { theme } from "../../../theme"

export const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "90%"
    },
    user: {
        flexDirection: "row"
    },
    greeting: {
        color: theme.colors.heading,
        fontFamily: theme.fonts.title500,
        fontSize: 24,
        marginRight: 5
    },
    username: {
        color: theme.colors.heading,
        fontSize: 24,
        fontFamily: theme.fonts.title700
    },
    message: {
        color: theme.colors.heading,
        fontFamily: theme.fonts.text400
    }
})