import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper"
import { theme } from "../../../theme";

export const style = StyleSheet.create({
    constainer: {
        width: "100%",
        height: 104,
        paddingTop: getStatusBarHeight(),
        paddingHorizontal: 24,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        flex: 1,
        textAlign: "center",
        fontFamily: theme.fonts.title700,
        fontSize: 20,
        color: theme.colors.heading
    }
})