import React from "react"
import { ScrollView, View } from "react-native"
import { categories } from "../../utils/categories"
import { Category } from "../Category"
import { style } from "./style"

export function CategorySelect() {

    return (
        <ScrollView
            horizontal
            style={style.container}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 40 }}
        >
            {categories.map(({ icon, id, title }) => {
                return <Category key={id} title={title} icon={icon} checked={false} />
            })}
        </ScrollView>
    )
}