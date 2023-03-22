import React, { useState } from "react";
import { braceletColors } from "../data/example";
import "../styles/global.css";
import "../styles/select-details/new-bracelet-form.css";
import { Carousel } from "primereact/carousel";
import { CarouselColorSquare } from "./carousel-color-square";
import { useContext } from "react";
import { NewBraceletContext } from "../context/new-bracelet-form-context";

export const ColorPicker = (props) => {
  const {  index } = props;
  const { newBracelet, handleChangeColor } = useContext(NewBraceletContext);
  const selectedColor = newBracelet.colors[index]
  return (
    <div>
      <Carousel
        value={Object.keys(braceletColors).map((color) => {
          return braceletColors[color];
        })}
        numVisible={6}
        numScroll={3}
        className="colors-carousel"
        itemTemplate={(color) => {
          return (
            <CarouselColorSquare
              onClick={()=>{handleChangeColor(color, index)}}
              color={color}
              isSelected={JSON.stringify(selectedColor) === JSON.stringify(color)}
            />
          );
        }}
        showIndicators={false}
      />
    </div>
  );
};
