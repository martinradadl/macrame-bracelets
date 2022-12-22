import { bracelets } from "../data/example";
import { cartActionTypes, braceletsActionTypes } from "./actionTypes";

const initialState = {
  bracelets: bracelets,
  cart: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartActionTypes.ADD_PRODUCT:
      const newData = [...state.cart, action.payload];
      return { ...state, cart: newData };
    case cartActionTypes.REMOVE_PRODUCT:
      return { ...state };
    case braceletsActionTypes.ADD_PRODUCT:
      return { ...state };
    default:
      return state;
  }
};

export default rootReducer
