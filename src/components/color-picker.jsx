import React from "react";
import { braceletColors } from "../data/example";
import "../styles/global.css";
import "../styles/select-details/new-bracelet-form.css";
import { Carousel } from "primereact/carousel";
import { CarouselColorSquare } from "./carousel-color-square";

export const ColorPicker = (props) => {
  const { onHandleColorChange } = props;
  return (
    <div>
      <Carousel
        value={Object.keys(braceletColors).map((color) => {
          return braceletColors[color];
        })}
        numVisible={6}
        numScroll={3}
        className="colors-carousel"
        itemTemplate={CarouselColorSquare}
        showIndicators={false}
      />
    </div>
  );
};
