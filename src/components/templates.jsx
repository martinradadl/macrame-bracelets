import React from "react";
import "../styles/select-details/index.css";
import { BraceletImg } from "./bracelet-img";
import { getBraceletImgFromTemplates } from "../data/helpers";

const Templates = (props) => {
  const { pattern, onClick } = props;
  return (
    <div class="templates-container">
      {pattern.templates.map((template) => {
        return (
          <div onClick={() => onClick(template)}>
            <div className="template-img-container">
              <BraceletImg brImg={getBraceletImgFromTemplates(template)} />
              <div className="template-bg"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { Templates };
