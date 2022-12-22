import React from "react";
import "../styles/select-knot.css";
import { Pattern } from "./pattern";

const Knot = () => {
  return (
    <div>
      <h3 class="knot-name">Name</h3>
      <div class="knot-container">
        <Pattern />
        <Pattern />
        <Pattern />
      </div>
    </div>
  );
};
export { Knot };
