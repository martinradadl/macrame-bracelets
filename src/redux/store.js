import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";

export const store = configureStore({
  reducer:rootReducer,
  devtools:window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
});
