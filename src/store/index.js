import { configureStore } from "@reduxjs/toolkit";
import {
  formReducer,
  addTitle,
  addDescription,
  setPriority,
  setStatus,
} from "./slices/popupFormSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export { store, addTitle, addDescription, setPriority, setStatus };
