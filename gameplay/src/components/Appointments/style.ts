import { StyleSheet } from "react-native"
import { theme } from "../../../theme"

export const style = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        alignSelf: "center",
        marginTop: "1%"
    },
    content: {
        flex: 1
    },
    header: {
        width: "100%",
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: "1%",
        paddingEnd: 10

    },
    title: {
        color: theme.colors.heading,
        fontFamily: theme.fonts.title700,
        fontSize: 18,
        marginLeft: "2%"
    },
    category: {
        color: theme.colors.heading
    },
    playerInfo: {

    },
    player: {
        fontFamily: theme.fonts.title700,
        fontSize: 18
    },
    footer: {
        marginLeft: "2%",
        width: "100%",
        flexDirection:"row",
        justifyContent: "space-between",
        paddingEnd:10
    },
    dateInfo: {
        color: theme.colors.primary
    }
})