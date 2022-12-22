import React from "react";
import {useDispatch} from "react-redux"
import { BraceletDetails } from "../components/bracelet-details";
import "../styles/selected-bracelet.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { bracelets } from "../data/example";
import { useState } from "react";
import { addItemToCart } from "../redux/actions";
import { Button } from "../components/UI/button";

const SelectedBracelet = (props) => {
    const dispatch = useDispatch()
  const navigate = useNavigate();
  const { id } = props;
  const [bracelet] = useState(
    bracelets.find((data) => {
      return data.id === id;
    })
  );
  return (
    <div className="sel-br-container">
      <BraceletDetails isBig={true} bracelet={bracelet} />
      {bracelet.inStock ? (
        <Button
          value="Agregar al carrito"
          onClick={() => {
            dispatch(addItemToCart(bracelet.id));
            navigate("/added-to-cart");
          }}
        />
      ) : null}
      <Button
        value="Ordenar una similar"
        onClick={() => {
          navigate("/select-details");
        }}
      />
    </div>
  );
};

export { SelectedBracelet };
