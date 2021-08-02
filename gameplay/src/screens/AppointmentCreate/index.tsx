import React from "react";
import { useState } from "react";
import { ImageBackground, View, Text } from "react-native";
import { Background } from "../../components/Background";
import { CategorySelect } from "../../components/CategorySelect";
import { Header } from "../../components/Header";
import { ListHeader } from "../../components/ListHeader";
import { style } from "./style"
import { RectButton } from "react-native-gesture-handler"


export function AppointmentsCreate() {
    const [category, setCategory] = useState("")

    const handleCategorySelected = (categoryId: string) => {
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }
    return (
        <Background>
            <Header
                title="Agendar partidas"
            />

            <ListHeader title={"Categoria"} subtitle={""} />

            <CategorySelect categorySelected={category} setCategory={handleCategorySelected} />

            <View style={style.form}>
                <RectButton>
                    <View style={style.select}>
                        <View style={style.image} />
                    </View>
                </RectButton>
            </View>


        </Background>
    )
}