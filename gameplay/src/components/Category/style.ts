import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

export const style = StyleSheet.create({
    container: {
        width: 104,
        height: 120,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        marginRight: 8

    },
    content: {
        width: 100,
        height: 116,
        justifyContent: "space-between",
        alignItems: "center"
    },
    checked: {
        backgroundColor: theme.colors.primary,
        width: 20,
        height: 20,
        alignItems: "flex-end",
        marginLeft: "80%",
        borderRadius: 10
    },
    check: {
        backgroundColor: theme.colors.secondary100,
        width: 20,
        height: 20,
        alignItems: "flex-end",
        marginLeft: "80%",
        borderRadius: 10
    },
    title: {
        color: theme.colors.heading,
        marginTop: 10,
        fontFamily: theme.fonts.title500,
        fontSize: 18
    }
})