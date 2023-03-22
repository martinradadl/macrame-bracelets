import React, { createContext, useState } from "react";
import { useLocation } from "react-router-dom";

const createNewBraceletColorArray = (numThreads) => {
  const colorArray = [];
  for (let i = 0; i < numThreads; i++) {
    colorArray.push(null);
  }
  return colorArray;
};

const initialNewBracelet = {
  knot: null,
  pattern: "",
  material: "Hilo Chino",
  colors: [],
  numOfThreads: 4,
};

export const NewBraceletContext = createContext({
  newBracelet: initialNewBracelet,
  handleChangeMaterial: () => {},
  handleChangeNumOfThreads: () => {},
  handleChangeColor: () => {},
});

export const NewBraceletProvider = (props) => {
  const { children } = props;
  const location = useLocation();
  const { knot, pattern } = location.state;
  const [newBracelet, setNewBracelet] = useState({
    ...initialNewBracelet,
    knot,
    pattern,
    colors: createNewBraceletColorArray(
      pattern.numOfThreads || initialNewBracelet.numOfThreads
    ),
  });
  const handleChangeMaterial = (event) => {
    setNewBracelet({
      ...newBracelet,
      material: event.target.value,
    });
  };
  const handleChangeNumOfThreads = (event) => {
    setNewBracelet({
      ...newBracelet,
      colors: createNewBraceletColorArray(event.target.value),
      numOfThreads: event.target.value,
    });
  };
  const handleChangeColor = (color, index) => {
    let colors = [...newBracelet.colors];
    colors[index] = color;
    setNewBracelet({
      ...newBracelet,
      colors,
    });
  };
  return (
    <NewBraceletContext.Provider
      value={{
        newBracelet,
        handleChangeMaterial,
        handleChangeNumOfThreads,
        handleChangeColor,
      }}
    >
      {children}
    </NewBraceletContext.Provider>
  );
};
