import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BraceletImg } from "../components/bracelet-img";
import { KnotDetails } from "../components/knot-details";
import { Templates } from "../components/templates";
import { Button } from "../components/UI/button";
import "../styles/select-details.css";

export const SelectDetails = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="sel-template-container">
        <div class="descr">
          <h3>
            Elige el material y los colores de cada hilo con ayuda de estos
            modelos:
          </h3>
        </div>
        <Templates />
      </div>
      <div className="sel-details-container">
        <div className="sel-details">
          <BraceletImg isBig={true} />
          <KnotDetails></KnotDetails>
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
