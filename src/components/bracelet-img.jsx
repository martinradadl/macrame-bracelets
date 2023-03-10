import React from "react";
import "../styles/bracelet.css";
import "../styles/global"
import { colors } from "../styles/global";

const BraceletImg = (props) => {
  const { isBig, brImg, isSelected } = props;
  return (
    <div>
      <img
        className={!isBig ? "img-small" : "img-big"}
        src={brImg}
        style={{
          border: isSelected ? "2px solid" : null,
          borderColor: isSelected ? colors.black : null,
          borderRadius: "4px",
        }}
      />
    </div>
  );
};

export { BraceletImg };
