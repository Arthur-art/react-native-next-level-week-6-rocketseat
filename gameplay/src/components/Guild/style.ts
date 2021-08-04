import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

export const style = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        justifyContent: "center"
    },
    content: {
        flex: 1,
        justifyContent: "center",
        width: "100%"
    },
    type: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight,
        fontSize: 13,
        marginBottom: 24
    },
    title: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        fontSize: 18,
        marginBottom: 11
    },
    text:{
        justifyContent: "center",
        width: "100%",
        marginLeft: "20%",
        marginTop: "10%"

    
    }

})