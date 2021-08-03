import React from "react";
import { useState } from "react";
import { View, Text } from "react-native";
import { Background } from "../../components/Background";
import { CategorySelect } from "../../components/CategorySelect";
import { Header } from "../../components/Header";
import { ListHeader } from "../../components/ListHeader";
import { style } from "./style"
import { RectButton } from "react-native-gesture-handler"
import { Feather } from "@expo/vector-icons"
import { theme } from "../../../theme";
import { GuildIcon } from "../../components/GuildIcon";
import { SmallInput } from "../../components/SmallInput";


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
                        {
                            //   <View style={style.image} />
                            <GuildIcon />

                        }

                        <View style={style.selectBody}>
                            <Text style={style.label}>Selecione um servidor</Text>
                        </View>

                        <Feather
                            name={"chevron-right"}
                            color={theme.colors.heading}
                            size={25}
                        />
                    </View>
                </RectButton>
                <View style={style.field}>

                    <View>
                        <Text style={style.label}>Dia e Mês</Text>
                        <View style={style.column}>
                            <SmallInput maxLength={2} />
                            <Text style={style.divider}>
                                /
                            </Text>
                            <SmallInput maxLength={2} />
                        </View>
                    </View>

                    <View>
                        <Text style={style.label}>Horas e Minutos</Text>
                        <View style={style.column}>
                            <SmallInput maxLength={2} />
                            <Text style={style.divider}>
                                :
                            </Text>
                            <SmallInput maxLength={2} />
                        </View>
                    </View>

                </View>
            </View>
        </Background>
    )
}