import React from "react";

export const ColorSquare = (props) => {
  const { color } = props;
  return (
    <div
      title={color.label}
      style={{
        backgroundColor: color.value,
        height: "10px",
        width: "10px",
        border: "1px solid white",
        margin: 1,
      }}
    ></div>
  );
};
