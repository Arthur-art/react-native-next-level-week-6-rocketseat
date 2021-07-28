import React from "react";
import Ranked from "../assets/ranked.svg"
import Training from "../assets/training.svg"
import Duel from "../assets/duel.svg"
import Fun from "../assets/fun.svg"
import { SvgProps } from "react-native-svg"

type Props = {
    id: string;
    title: string;
    icon: React.FC<SvgProps>;
}

export const categories: Props[] = [
    { id: '1', title: "Ranqueada", icon: Ranked },
    { id: '2', title: "Ranqueada", icon: Training },
    { id: '3', title: "Ranqueada", icon: Duel },
    { id: '4', title: "Ranqueada", icon: Fun }
]