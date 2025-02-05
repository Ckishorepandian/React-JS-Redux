import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./bookSlice.js";
import notesReducer from "./noteSlice.js";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    notes: notesReducer,
  },
});
export default store;
