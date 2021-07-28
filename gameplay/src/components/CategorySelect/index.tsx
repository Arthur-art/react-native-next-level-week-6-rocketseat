import React from "react"
import { ScrollView } from "react-native"
import { style } from "./style"

export function CategorySelect() {

    return (
        <ScrollView
            style={style.container}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 40 }}
        >

        </ScrollView>
    )
}