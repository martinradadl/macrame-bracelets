import React, { useState } from "react";
import { ColorPicker } from "./color-picker";

export const NewBraceletForm = (props) => {
  const { onHandleColorChange, newBracelet } = props;

  return (
    <div class="model-details">
      <h3 class="title">TU MANILLA</h3>
      <p class="material">
        <b>Material:</b>
      </p>
      <select class="knot-details" id="material-selector">
        <option value="Hilo Chino">Hilo Chino</option>
        <option value="Hilo Vibora">Hilo Víbora</option>
        <option value="Cordón">Cordón</option>
      </select>
      <p class="knot-details" id="br-width">
        <b>Ancho Hilo: </b>2 mm
      </p>
      <p className="colors-details">
        <b>Colores:</b>
      </p>
      <div className="colors-list">
        <ColorPicker onHandleColorChange={onHandleColorChange} />
        <ColorPicker onHandleColorChange={onHandleColorChange} />
        <ColorPicker onHandleColorChange={onHandleColorChange} />
        <ColorPicker onHandleColorChange={onHandleColorChange} />
      </div>
    </div>
  );
};
