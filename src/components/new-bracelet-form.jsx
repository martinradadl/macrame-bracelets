import React, { useContext, useState } from "react";
import { NewBraceletContext } from "../context/new-bracelet-form-context";
import { knots } from "../data/example";
import { ColorPicker } from "./color-picker";
import { getCordWidth, priceCalculator } from "../data/helpers";

const createArray = (beg, end) => {
  const array = [];
  for (let i = beg; i <= end; i++) {
    array.push(i);
  }
  return array;
};
const numCordsArray = createArray(4, 12);

const createInitialColorArray = (numThreads) => {
  const colorArray = [];
  for (let i = 0; i < numThreads; i++) {
    colorArray.push({ label: "", value: "" });
  }
  return colorArray;
};

export const NewBraceletForm = (props) => {
  const { onHandleColorChange } = props;
  const { newBracelet, handleChangeMaterial } = useContext(NewBraceletContext);
  const { knot, pattern } = newBracelet;
  const [selectedNumThreads, setselectedNumThreads] = useState(4);
  return (
    <div class="model-details">
      <h3 class="title">TU MANILLA</h3>
      <p class="material">
        <b>Material:</b>
      </p>
      <select
        class="knot-details"
        id="material-selector"
        value={newBracelet.material}
        onChange={handleChangeMaterial}
      >
        <option value="Hilo Chino">Hilo Chino</option>
        <option value="Hilo Víbora">Hilo Víbora</option>
        <option value="Cordón">Cordón</option>
      </select>
      <p class="knot-details" id="cord-width">
        <b>Ancho Hilo: </b>
        {getCordWidth(newBracelet.material)}
      </p>
      {knot.name === knots.feston.name ? (
        <div className="select-num-cords-container">
          <p class="knot-details">
            <b>Núm. Hilos: </b>
          </p>
          <select
            class="num-cords-selector"
            value={selectedNumThreads}
            onChange={(e) => setselectedNumThreads(e.target.value)}
          >
            {numCordsArray.map((num, index) => {
              if (num % 2 === 0 && pattern.name === "Flechas") {
                return (
                  <option value={num} key={index}>
                    {num}
                  </option>
                );
              } else if (pattern.name !== "Flechas") {
                return (
                  <option value={num} key={index}>
                    {num}
                  </option>
                );
              } else {
                return null;
              }
            })}
          </select>
        </div>
      ) : null}

      <p className="colors-details">
        <b>Colores:</b>
      </p>
      <div className="colors-list">
        {createInitialColorArray(
          pattern.numThreads === undefined
            ? selectedNumThreads
            : pattern.numThreads
        ).map((_color, index) => {
          return <ColorPicker index={index} key={index} />;
        })}
      </div>
      <p class="knot-details" id="bracelet-price">
        <b>Precio: </b>
        {priceCalculator(
          knot,
          pattern.name,
          false,
          knot.name === "Festón" ? selectedNumThreads : 1
        )}
      </p>
    </div>
  );
};
