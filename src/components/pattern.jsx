import React from "react";
import "../styles/select-knot.css";
import { useNavigate } from "react-router-dom";
import { BraceletImg } from "./bracelet-img";
import { priceCalculator } from "../data/helpers";
import { getBraceletImgFromTemplates } from "../data/helpers";

const Pattern = (props) => {
  const navigate = useNavigate();
  const { pattern, knot } = props;
  return (
    <div class="pattern">
      <div
        onClick={() => {
          navigate("/select-details",
          {state:{pattern, knot}});
        }}
      >
        <div className="img-container">
          <BraceletImg
            brImg={getBraceletImgFromTemplates(pattern.templates[0])}
          />
          <div className="img-bg"></div>
        </div>
      </div>
      <div class="info">
        <h4>{pattern.name}</h4>
        <p>
          {knot.name === "Festón"
            ? `desde ${priceCalculator(knot, pattern.name, false, 4)}`
            : priceCalculator(knot, pattern.name, false, 1)}
        </p>
      </div>
    </div>
  );
};

export { Pattern };
