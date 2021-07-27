import { StyleSheet } from "react-native"
import { theme } from "../../../theme"

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10
    },
    input: {
        width: 200,
        height: 40,
        borderBottomWidth: 1,
        marginTop: 100
    },
    content: {
        marginTop: -50
    },
    title: {
        color: theme.colors.heading,
        textAlign: "center",
        fontSize: 30,
        marginBottom: 20
    },
    subtitle: {
        color: theme.colors.heading,
        textAlign: "center",
        fontSize: 15
    }
})