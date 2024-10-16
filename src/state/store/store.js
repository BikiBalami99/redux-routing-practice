import { configureStore } from "@reduxjs/toolkit";
import postsSliceReducer from "../slices/postsSlice";

export const store = configureStore({
  reducer: { postsSlice: postsSliceReducer },
});
