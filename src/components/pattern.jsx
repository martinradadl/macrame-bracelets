import React from "react";
import "../styles/select-knot.css";
import { Link } from "react-router-dom";
import { BraceletImg } from "./bracelet-img";

const Pattern = () => {
  return (
    <div class="pattern">
      <Link to="/select-details">
        <div className="img-container">
          <BraceletImg />
          <div className="img-bg"></div>
        </div>
      </Link>
      <div class="info">
        <h4>Básico</h4>
        <p>desde $8000</p>
      </div>
    </div>
  );
};

export { Pattern };
