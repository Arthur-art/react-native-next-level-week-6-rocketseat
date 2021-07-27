import { StyleSheet } from "react-native"
import { theme } from "../../../theme"

export const style = StyleSheet.create({
    container: {
        width: 250,
        height: 60,
        backgroundColor: theme.colors.primary,
        marginTop: 15,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"

    },
    iconWrapper: {
        borderRightWidth: 2,
        padding: 15,
        borderColor: theme.colors.line
    },
    title: {
        color: theme.colors.heading
    }
})