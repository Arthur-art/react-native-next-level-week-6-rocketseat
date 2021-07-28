import React from "react"
import { ScrollView } from "react-native"
import { categories } from "../../utils/categories"
import { style } from "./style"

export function CategorySelect() {

    return (
        <ScrollView
            style={style.container}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 40 }}
        >
            {categories.map((category)=>{

            })}
        </ScrollView>
    )
}