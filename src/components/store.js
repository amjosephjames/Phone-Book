import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./Global";

export const store = configureStore({
  reducer: { myReducer },
});
