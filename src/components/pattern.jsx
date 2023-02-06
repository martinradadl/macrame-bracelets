import React from "react";
import "../styles/select-knot.css";
import { Link } from "react-router-dom";
import { BraceletImg } from "./bracelet-img";
import { priceCalculator } from "../data/helpers";

const Pattern = (props) => {
  const { pattern, knot } = props;
  return (
    <div class="pattern">
      <Link to="/select-details">
        <div className="img-container">
          <BraceletImg />
          <div className="img-bg"></div>
        </div>
      </Link>
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
