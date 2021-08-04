import React from "react";
import { useState } from "react";
import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { CategorySelect } from "../../components/CategorySelect";
import { Header } from "../../components/Header";
import { ListHeader } from "../../components/ListHeader";
import { style } from "./style"
import { RectButton } from "react-native-gesture-handler"
import { Feather } from "@expo/vector-icons"
import { theme } from "../../../theme";
import { GuildIcon } from "../../components/GuildIcon";
import { SmallInput } from "../../components/SmallInput";
import { TextArea } from "../../components/TextArea";
import { ButtonScheduling } from "../../components/ButtonScheduling";
import { Background } from "../../components/Background";
import { ModalView } from "../../components/ModalView";
import { Guilds } from "../../components/Guilds";
import { GuildProps } from "../../components/Appointments";


export function AppointmentsCreate() {
    const [category, setCategory] = useState("")
    const [openGuildsModal, setOpenGuildsModal] = useState(false)
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps)

    const handleOpenGuildsModal = () => {
        setOpenGuildsModal(true)
    }

    const handleGuildSelected = (guildSelected: GuildProps) => {
        setGuild(guildSelected)
        setOpenGuildsModal(true)
    }

    const handleCategorySelected = (categoryId: string) => {
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }
    return (
        <Background>
            <KeyboardAvoidingView
                style={style.container}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >

                <ScrollView>
                    <Header
                        title="Agendar partidas"
                    />

                    <ListHeader title={"Categoria"} subtitle={""} />

                    <CategorySelect categorySelected={category} setCategory={handleCategorySelected} />

                    <View style={style.form}>
                        <RectButton onPress={handleOpenGuildsModal}>
                            <View style={style.select}>
                                {
                                    //<View style={style.image} />
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

                        <View style={style.containerDescription}>
                            <Text style={style.label}>Descrição</Text>

                            <Text style={style.label}>Max 100 caracteres</Text>
                        </View>

                        <TextArea multiline maxLength={100} numberOfLines={5} />

                        <ButtonScheduling activeOpacity={0.7} title={"Agendar"} />

                        <View style={style.listDivider} />
                    </View>

                </ScrollView>

                <ModalView visible={openGuildsModal}>
                    <Guilds />
                </ModalView>

            </KeyboardAvoidingView>
        </Background>
    )
}