import React from "react"
import { View, Image } from "react-native"
import { style } from "./style"

export function GuildIcon() {

    return (
        <Image
            style={style.image}
            source={{ uri: "https://s2.glbimg.com/sXsPFRk4Vmct2ALKnCa1t_YePqg=/0x0:1514x917/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/h/w/Abq4oBSySsO0xmGnkDlg/discord.jpg" }}
            resizeMode="cover" />
    )
}