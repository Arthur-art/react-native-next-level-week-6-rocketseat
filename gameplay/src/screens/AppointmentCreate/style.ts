import { StyleSheet } from "react-native";
import { theme } from "../../../theme";
const { heading, secondary50 } = theme.colors
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
        paddingHorizontal: 24,
        marginTop: 32
    },
    select: {
        width: "100%",
        flexDirection: "row",
        height: 68,
        borderColor: secondary50,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: "center",
        overflow: "hidden",
        paddingRight: 25
    },
    image: {
        width: 64,
        height: 68,
        backgroundColor: secondary50,
        borderWidth: 1,
        borderRadius: 8,

    },
    selectBody: {
        flex: 1,
        alignItems: "center"
    },
    field: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 30
    },
    column: {
        flexDirection: "row",
        alignItems: "center"
    },
    divider: {
        marginRight: 4,
        fontSize: 18,
        fontFamily: theme.fonts.text500,
        color: theme.colors.highlight
    }
})