import { StyleSheet } from "react-native"
import { theme } from "../../../theme"

export const style = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 24,
        marginTop:"5%"
    },
    title: {
        color: theme.colors.highlight,
        fontFamily: theme.fonts.title700,
        fontSize: 18
    },
    subtitle: {
        color: theme.colors.highlight,
        fontFamily: theme.fonts.title500,
        fontSize: 18
    }
})