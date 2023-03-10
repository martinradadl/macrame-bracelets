import React, { useState } from "react";
import { useContext } from "react";
import { NewBraceletProvider } from "../context/new-bracelet-form-context";
import { getCordWidth } from "../data/helpers";
import "../styles/select-details/index.css";
import { NewBraceletForm } from "./new-bracelet-form";
import { SelectedTemplateDetails } from "./selected-template-details";

const KnotDetails = (props) => {
  //   const [newBracelet, setNewBracelet] = useState({
  //     knot: null,
  //     pattern: "",
  //     material: "",
  //     colors: [],
  //   });

  const onHandleColorChange = (value, option) => {
    // setNewBracelet(value);
  };

  const { isInput, selectedTemplate } = props;

  return isInput ? (
    <NewBraceletProvider>
      <NewBraceletForm
        onHandleColorChange={onHandleColorChange}
        newBracelet={undefined}
      />
    </NewBraceletProvider>
  ) : (
    <SelectedTemplateDetails selectedTemplate={selectedTemplate} />
  );
};

export { KnotDetails };
