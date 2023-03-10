import React, { useState } from "react";
import { braceletColors } from "../data/example";
import "../styles/global.css";
import "../styles/select-details/new-bracelet-form.css";
import { Carousel } from "primereact/carousel";
import { CarouselColorSquare } from "./carousel-color-square";
import { useContext } from "react";
import { NewBraceletContext } from "../context/new-bracelet-form-context";

export const ColorPicker = (props) => {
  const { onHandleColorChange } = props;
  const temp = useContext(NewBraceletContext)
  const [selectedColor, setSelectedColor] = useState();
  const handleOnClick = (color) => {
    setSelectedColor(color);
  };

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
              onClick={()=>{handleOnClick(color)}}
              color={color}
              isSelected={selectedColor === color}
            />
          );
        }}
        showIndicators={false}
      />
    </div>
  );
};
