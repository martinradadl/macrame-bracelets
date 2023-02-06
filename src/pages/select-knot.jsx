import React from "react";
import { Knot } from "../components/knot";
import "../styles/select-knot.css";
import { knots } from "../data/example";

export const SelectKnot = () => {
  return (
    <div>
      <h2 class="sel-knot-descr">Escoge un patrón: </h2>
      {Object.keys(knots).map((knot, index) => {
        console.log(knot)
        return <Knot knot={knots[knot]} key={index} />;
      })}
    </div>
  );
};
