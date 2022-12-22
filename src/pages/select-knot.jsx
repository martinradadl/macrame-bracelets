import React from "react";
import { Knot } from "../components/knot";
import "../styles/select-knot.css"

export const SelectKnot = () => {
    return <div>
        <h2 class="sel-knot-descr">Escoge un patrón: </h2>
        <Knot />
        <Knot />
        <Knot />
    </div>
}