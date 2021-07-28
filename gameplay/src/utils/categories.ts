import React from "react";
import Ranked from "../assets/ranked.svg"
import { SvgProps } from "react-native-svg"

type Props = {
    id: string;
    title: string;
    icon: React.FC<SvgProps>;
}

export const categories: Props[] = [
    { id: '1', title: "Ranqueada", icon: Ranked },
    { id: '2', title: "Ranqueada", icon: Ranked },
    { id: '3', title: "Ranqueada", icon: Ranked },
    { id: '4', title: "Ranqueada", icon: Ranked }
]