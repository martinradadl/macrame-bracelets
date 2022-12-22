import { useState } from "react";

export const useForms = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleValuesChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    let obj = {
      ...values,
      [name]: value,
    };
    setValues(obj);
  }

  return {values, handleValuesChange};
};
