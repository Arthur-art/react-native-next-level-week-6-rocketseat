import { StyleSheet } from "react-native"
import { theme } from "../../../theme"

export const style = StyleSheet.create({
    container: {
        width: "100%",
        height: 60,
        backgroundColor: theme.colors.primary,
        marginTop: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
        justifyContent: "space-around"

    },
    iconWrapper: {
        borderRightWidth: 1,
        padding: "4%",
        borderColor: theme.colors.line,
    },
    title: {
        color: theme.colors.heading,
        fontFamily: theme.fonts.title700,
        fontSize: 18
    }
})