import React from "react";

export const CarouselColorSquare = (props) => {
  const { color, isSelected, onClick } = props;
  return (
    <div
      onClick={onClick}
      title={color.label}
      style={{
        backgroundColor: color.value,
        height: "12px",
        width: "12px",
        border: isSelected ? "2px solid green" : "1px solid white",
        margin: 1,
      }}
    ></div>
  );
};
