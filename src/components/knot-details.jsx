import React, { useState } from "react";
import { useContext } from "react";
import { getCordWidth } from "../data/helpers";
import "../styles/select-details/index.css";
import { NewBraceletForm } from "./new-bracelet-form";
import { SelectedTemplateDetails } from "./selected-template-details";

const KnotDetails = (props) => {
  
  const { isInput, selectedTemplate } = props;

  return isInput ? (
      <NewBraceletForm/>
  ) : (
    <SelectedTemplateDetails selectedTemplate={selectedTemplate} />
  );
};

export { KnotDetails };
