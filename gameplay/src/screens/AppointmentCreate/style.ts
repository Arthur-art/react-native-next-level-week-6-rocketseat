import { StyleSheet } from "react-native";
import { theme } from "../../../theme";
const { heading } = theme.colors
const { text400, title700 } = theme.fonts
export const style = StyleSheet.create({
    container: {
        flex: 1
    },
    label: {
        fontSize: 18,
        fontFamily: title700,
        color: heading
    },
    form: {

    },
    select: {

    },
    image: {

    }
})