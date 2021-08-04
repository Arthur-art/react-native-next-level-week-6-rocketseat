import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

export const style = StyleSheet.create({
    container: {
        flex:1,
        marginTop: "16%"
    },
    overlay: {
        flex: 1,
        backgroundColor: theme.colors.overlay
    },
    bar: {
        width: 50,
        height: 2,
        borderRadius: 2,
        backgroundColor: theme.colors.secondary30,
        alignSelf: "center",
        marginTop: "20%"
    }
})