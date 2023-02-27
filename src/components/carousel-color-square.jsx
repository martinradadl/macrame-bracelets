import React from "react";

export const CarouselColorSquare = (color) => {
  return (
    <div
      title={color.label}
      style={{
        backgroundColor: color.value,
        height: "12px",
        width: "12px",
        border: "1px solid white",
        margin: 1,
      }}
    ></div>
  );
};
