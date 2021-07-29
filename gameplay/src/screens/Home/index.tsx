import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { style } from "./style"
import { Profile } from "../../components/Profile"
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";

export function Home() {

    const appointments = [
        {
            id: "1",
            guild: {
                id: "1",
                name: "Lendários",
                icon: null,
                owner: true
            },
            category: "1",
            date: "22/06 às 20:40h",
            description: "Que cara bom vei, que cara excelente"
        }
    ]

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
            <FlatList
                data={appointments}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Text>{item.description}</Text>
                )} />
        </View>
    )
}