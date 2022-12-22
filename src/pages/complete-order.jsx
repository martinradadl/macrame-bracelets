import React from "react";
import "../styles/complete-order.css";
import { useNavigate } from "react-router-dom";
import { useForms } from "../hooks/useForms.js";
import { Button } from "../components/UI/button";

const initialValues = {
  email: "",
  tel: "",
};

const CompleteOrder = () => {
  const navigate = useNavigate();
  const { values, handleValuesChange } = useForms(initialValues);
  const submit = () => {
    if (values.email !== "" || values.tel !== "") {
      navigate("/confirm-order");
    } else {
      alert("You have some missing fields");
    }
  };

  return (
    <div class="compl-order-container">
      <h1 className="compl-order-title">Completar orden</h1>
      <div class="compl-order-descr">
        <p>
          Necesitamos tu correo o teléfono para confirmar la disponibilidad de
          las manillas y elegir el método de pago.
        </p>
      </div>
      <div className="input-container">
        <label for="email" class="labels">
          E-mail
        </label>
        <input
          type="email"
          class="input"
          name="email"
          value={values.email}
          onChange={handleValuesChange}
        />
      </div>
      <div className="input-container">
        <label for="tel" class="labels">
          Teléfono
        </label>
        <input
          type="tel"
          class="input"
          name="tel"
          value={values.tel}
          onChange={handleValuesChange}
        />
      </div>

      <Button value="Ordenar" onClick={submit} />
    </div>
  );
};

export { CompleteOrder };
