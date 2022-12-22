import React from "react";
import "../../styles/button.css";

export const Button = (props) => {
    const {value, onClick} = props;
    return <button className="btn-component" onClick={onClick}>
        {value}
    </button>
}