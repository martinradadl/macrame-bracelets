import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/UI/button";
import "../styles/confirm.css";

export const AddedToCart = () => {
  const navigate = useNavigate();
  return (
    <div class="confirm-container">
      <div className="confirm-descr">
        <h1>Manilla agregada al carrito!</h1>
      </div>
      <Button
        value="Completar orden"
        onClick={() => {
          navigate("/complete-order");
        }}
      />
      <Button
        value="Volver al incio"
        onClick={() => {
          navigate("/");
        }}
      />
    </div>
  );
};
