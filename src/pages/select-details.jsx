import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { BraceletImg } from "../components/bracelet-img";
import { KnotDetails } from "../components/knot-details";
import { Templates } from "../components/templates";
import { Button } from "../components/UI/button";
import {
  getBraceletFromId,
  getBraceletImgFromTemplates,
} from "../data/helpers";
import "../styles/select-details/index.css"

export const SelectDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { knot, pattern } = location.state;
  const [selectedTemplate, setSelectedTemplate] = useState(pattern.templates[0]);
  const handleSelectedTemplate = (id) => {
    setSelectedTemplate(id);
  };
  console.log(selectedTemplate);
  return (
    <div>
      <div className="sel-template-container">
        <div class="descr">
          <h2>
            <b>Nudo {knot.name}, Patrón {pattern.name}</b>
          </h2>
          <h3>
            Elige el material y los colores de cada hilo con ayuda de estos
            modelos:
          </h3>
        </div>
        <Templates pattern={pattern} onClick={handleSelectedTemplate} />
      </div>
      <div className="sel-details-container">
        <div className="sel-details">
          <BraceletImg
            isBig={true}
            brImg={getBraceletImgFromTemplates(selectedTemplate)}
          />
          <KnotDetails selectedTemplate={getBraceletFromId(selectedTemplate)}></KnotDetails>
          <KnotDetails isInput={true}></KnotDetails>
        </div>
        <div className="buttons-container">
          <Button
            value="Agregar al Carrito"
            onClick={() => {
              navigate("/added-to-cart");
            }}
          />
          <Button
            value="Completar Orden"
            onClick={() => {
              navigate("/complete-order");
            }}
          />
        </div>
      </div>
    </div>
  );
};
