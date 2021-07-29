import React from "react"
import { ScrollView, View } from "react-native"
import { categories } from "../../utils/categories"
import { Category } from "../Category"
import { style } from "./style"

type Props = {
    categorySelected: string;
    setCategory: (categoryId: string) => void;
}

export function CategorySelect({ categorySelected, setCategory }: Props) {

    return (
        <ScrollView
            horizontal
            style={style.container}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 40 }}
        >
            {categories.map(({ icon, id, title }) => {
                return <Category
                    onPress={() => setCategory(id)}
                    key={id}
                    title={title}
                    icon={icon}
                    checked={id === categorySelected} />
            })}
        </ScrollView>
    )
}