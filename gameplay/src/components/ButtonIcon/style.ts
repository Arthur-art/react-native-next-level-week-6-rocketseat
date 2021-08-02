import { StyleSheet } from "react-native"
import { theme } from "../../../theme"

export const style = StyleSheet.create({
    container: {
        width: "90%",
        height: 60,
        backgroundColor: theme.colors.primary,
        marginTop: 15,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20

    },
    iconWrapper: {
        borderRightWidth: 1,
        padding: "4%",
        borderColor: theme.colors.line
    },
    title: {
        color: theme.colors.heading,
        fontFamily: theme.fonts.title700,
        fontSize: 18
    }
})