import React, { createContext, useState } from "react";
import { useLocation } from "react-router-dom";

const initialNewBracelet = {
  knot: null,
  pattern: "",
  material: "",
  colors: [],
};

export const NewBraceletContext = createContext(initialNewBracelet);

export const NewBraceletProvider = (props) => {
  const { children } = props;
  const location = useLocation();
  const { knot, pattern } = location.state;
  const [newBracelet, setNewBracelet] = useState({
    ...initialNewBracelet,
    knot,
    pattern,
  });
  return (
    <NewBraceletContext.Provider
      value={{
        newBracelet: newBracelet,
        setNewBracelet: setNewBracelet,
      }}
    >
      {children}
    </NewBraceletContext.Provider>
  );
};
