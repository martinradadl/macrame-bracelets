import { rawBracelets } from "./example";

export const priceCalculator = (knot, pattern, isInStock, threadNum) => {
  const patternFound = knot.patterns.find((elem) => {
    return elem.name === pattern;
  });
  const discount = isInStock ? 0.8 : 1;
  if (knot.name === "Combinado") return `$${patternFound.price * discount}`;
  return `$${
    knot.price * patternFound.mult * (threadNum ? threadNum : 1) * discount
  }`;
};

export const getBraceletImgFromTemplates = (templateId) => {
  const foundBracelet = rawBracelets.find((bracelet) => {
    return parseInt(bracelet.id) === templateId;
  });
  return foundBracelet?.image || null;
};

export const getBraceletFromId = (id) => {
  const foundBracelet = rawBracelets.find((bracelet) => {
    return parseInt(bracelet.id) === id;
  });
  return foundBracelet;
};

export const getCordWidth = (material) => {
  switch (material) {
    case "Hilo Chino":
      return "1 mm";
      break;
    case "Cordón":
      return "2 mm";
      break;
    case "Hilo Víbora":
      return "3 mm";
      break;
  }
};
