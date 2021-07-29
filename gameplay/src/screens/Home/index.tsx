import React, { useState } from "react";
import { View } from "react-native";
import { style } from "./style"
import { Profile } from "../../components/Profile"
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";

export function Home() {

    const [category, setCategory] = useState("")
    const handleCategorySelected = (categoryId: string) => {
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }

    return (
        <View style={style.container}>
            <View style={style.header}>
                <Profile />
                <ButtonAdd />
            </View>
            <CategorySelect categorySelected={category} setCategory={handleCategorySelected} />
            <ListHeader title={"Partidas agendadas"} subtitle={"Total 6"} />
        </View>
    )
}