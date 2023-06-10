import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./notesSlice/notesSlice";

export const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
});
