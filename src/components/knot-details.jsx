import React, { useState } from "react";
import { getCordWidth } from "../data/helpers";
import "../styles/select-details/index.css"
import { NewBraceletForm } from "./new-bracelet-form";
import { SelectedTemplateDetails } from "./selected-template-details";

const KnotDetails = (props) => {
  const [newBracelet, setNewBracelet] = useState({
    knot: null,
    pattern: "",
    material: "",
    colors: [],
  });

  const onHandleColorChange = (value, option) => {
    setNewBracelet(value);
  };

  const { isInput, selectedTemplate } = props;

  return isInput ? (
    <NewBraceletForm
      onHandleColorChange={onHandleColorChange}
      newBracelet={newBracelet}
    />
  ) : (
    <SelectedTemplateDetails selectedTemplate={selectedTemplate} />
  );
};

export { KnotDetails };
