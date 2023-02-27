import React, { useState } from "react";
import { getCordWidth } from "../data/helpers";
import { ColorSquare } from "./color-square";
import "../styles/select-details/index.css"
import "../styles/select-details/template-details.css"


export const SelectedTemplateDetails = (props) => {
    const {selectedTemplate} = props;
    return (
        <div class="model-details">
      <h3 class="title">MODELO</h3>
      <p class="material">
        <b>Material:</b>
      </p>
      <p className="knot-details"> {selectedTemplate.material}</p>
      <p className="knot-details" id="br-width">
        <b>Ancho Hilo: </b>{getCordWidth(selectedTemplate.material)}
      </p>
      <p className="colors-details">
        <b>Colores:</b>
      </p>
      <div className="template-colors-list">
      {selectedTemplate.colors.map((color)=>{
        return <div className="color-square">
            <ColorSquare color={color} isRectangle={true}/>
         </div>
      })}
      </div>
    </div>
    )
}