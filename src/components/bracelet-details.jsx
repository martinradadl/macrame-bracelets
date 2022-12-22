import React from "react";
import { BraceletImg } from "./bracelet-img";
import "../styles/details.css";
import { ColorSquare } from "./color-square";

const BraceletDetails = (props) => {
  const { isBig, bracelet } = props;
  return (
    <div class="details-container">
      <BraceletImg isBig={isBig} brImg={bracelet.image} />
      <div class="details">
        <p>
          {" "}
          <b>ID:</b> {bracelet.id}
        </p>
        <p>
          <b>Nudo:</b> {bracelet.knot.name}
        </p>
        <p>
          <b>Patrón:</b> {bracelet.pattern}
        </p>
        <p>
          <b>Material:</b> {bracelet.material}
        </p>
        <p>
          <b>Colores:</b>{" "}
          <div style={{ display: "flex" }}>
            {bracelet.colors.map((color) => {
              return <ColorSquare color={color} />;
            })}
          </div>
        </p>
        <p>
          <b>Precio: </b> {bracelet.price}
        </p>
      </div>
    </div>
  );
};

export { BraceletDetails };
