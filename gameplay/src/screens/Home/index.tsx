import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { style } from "./style"
import { Profile } from "../../components/Profile"
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { Appointments } from "../../components/Appointments";
import PlayerSvg from "../../assets/player.svg"
import { ListDivider } from "../../components/ListDivider";
import { Background } from "../../components/Background";
import { useNavigation } from "@react-navigation/native";

export function Home() {

    const appointments = [
        {
            id: "1",
            guild: {
                id: "1",
                name: "Lendários",
                icon: PlayerSvg,
                owner: true
            },
            category: "1",
            date: "22/06 às 20:40h",
            description: "Que cara bom vei, que cara excelente"
        },
        {
            id: "2",
            guild: {
                id: "2",
                name: "Lendários",
                icon: PlayerSvg,
                owner: true
            },
            category: "1",
            date: "22/06 às 20:40h",
            description: "Que cara bom vei, que cara excelente"
        },
        {
            id: "3",
            guild: {
                id: "3",
                name: "Lendários",
                icon: PlayerSvg,
                owner: true
            },
            category: "1",
            date: "22/06 às 20:40h",
            description: "Que cara bom vei, que cara excelente"
        },
        {
            id: "4",
            guild: {
                id: "1",
                name: "Lendários",
                icon: PlayerSvg,
                owner: true
            },
            category: "4",
            date: "22/06 às 20:40h",
            description: "Que cara bom vei, que cara excelente"
        }
    ]

    const [category, setCategory] = useState("")

    const navigation = useNavigation();

    const handleCategorySelected = (categoryId: string) => {
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }

    const handleAppointmentsDetails = () => {
        navigation.navigate("AppointmentsDetails")
    }

    return (
        <Background>
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
                        <Appointments
                        onPress={handleAppointmentsDetails}
                        data={item} />
                    )}
                    ItemSeparatorComponent={() => <ListDivider />} />
            </View>
        </Background>
    )
}