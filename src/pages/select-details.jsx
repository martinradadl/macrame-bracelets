import { Content } from "antd/lib/layout/layout";
import React, { useState } from "react";
import { useContext } from "react";
import { NewBraceletContext } from "../context/new-bracelet-form-context";
import { Link, useNavigate, useLocation, createPath } from "react-router-dom";
import { BraceletImg } from "../components/bracelet-img";
import { KnotDetails } from "../components/knot-details";
import { Templates } from "../components/templates";
import { Button } from "../components/UI/button";
import {
  getBraceletFromId,
  getBraceletImgFromTemplates,
} from "../data/helpers";
import "../styles/select-details/index.css";

export const SelectDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { knot, pattern } = location.state;
  const [selectedTemplate, setSelectedTemplate] = useState(
    pattern.templates[0]
  );
  const { newBracelet } = useContext(NewBraceletContext);
  const handleSelectedTemplate = (id) => {
    setSelectedTemplate(id);
  };
  const isNewBraceletComplete = (newBracelet) => {
    return newBracelet.colors.every((color) => {
      return color !== null;
    });
  };
  const handleAddToCart = (newBracelet) => {
    if (isNewBraceletComplete(newBracelet)) {
      navigate("/added-to-cart", { state: { newBracelet } });
    } else {
      alert("No has seleccionado los colores de todos los hilos");
    }
  };
  const handleCompleteOrder = (newBracelet) => {
    if (isNewBraceletComplete(newBracelet)) {
      navigate("/complete-order", { state: { newBracelet } });
    } else {
      alert("No has seleccionado los colores de todos los hilos");
    }
  };
  return (
    <div>
      <div className="sel-template-container">
        <div class="descr">
          <h2>
            <b>
              Nudo {knot.name}, Patrón {pattern.name}
            </b>
          </h2>
          <h3>
            Elige el material y los colores de cada hilo con ayuda de estos
            modelos:
          </h3>
        </div>
        <Templates
          pattern={pattern}
          onClick={handleSelectedTemplate}
          selectedTemplate={selectedTemplate}
        />
      </div>
      <div className="sel-details-container">
        <div className="sel-details">
          <BraceletImg
            isBig={true}
            brImg={getBraceletImgFromTemplates(selectedTemplate)}
          />
          <KnotDetails
            selectedTemplate={getBraceletFromId(selectedTemplate)}
          ></KnotDetails>
          <KnotDetails isInput={true}></KnotDetails>
        </div>
        <div className="buttons-container">
          <Button
            value="Agregar al Carrito"
            onClick={() => {
              handleAddToCart(newBracelet);
            }}
          />
          <Button
            value="Completar Orden"
            onClick={() => {
              handleCompleteOrder(newBracelet);
            }}
          />
        </div>
      </div>
    </div>
  );
};
