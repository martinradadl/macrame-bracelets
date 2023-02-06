import React from "react";
import "../styles/select-knot.css";
import { Pattern } from "./pattern";

const Knot = (props) => {
  const { knot } = props;
  return (
    <div>
      <h3 class="knot-name">{knot.name}</h3>
      <div class="knot-container">
        {knot.patterns.map((pattern, index) => {
          return <Pattern pattern={pattern} knot={knot} key={index} />;
        })}
      </div>
    </div>
  );
};
export { Knot };
