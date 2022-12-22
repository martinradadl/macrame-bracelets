import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/UI/button";
import "../styles/confirm.css"

const ConfirmOrder = () => {
    const navigate = useNavigate();

    return <div class="confirm-container">
        <div className="confirm-descr">
            <h1>Tu orden ha sido completada!</h1>
            <p>Pronto te contactaremos para seguir con el proceso.
            </p>
        </div>
        <Button
         value="Volver al incio"
         onClick={() => {
            navigate("/")}}/>
    </div>
}

export { ConfirmOrder }