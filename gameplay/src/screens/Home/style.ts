import { StyleSheet } from "react-native"
import { theme } from "../../../theme"

export const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: "100%",
        height: "10%",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: "10%",
        flexDirection: "row",
        padding: 20
    },
    title: {
        color: theme.colors.heading
    }
})