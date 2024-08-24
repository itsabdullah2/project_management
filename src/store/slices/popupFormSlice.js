import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  description: "",
  priority: "Select Priority",
  status: "Select Status",
};

const popupFormSlice = createSlice({
  name: "form",
  initialState: initialState,
  reducers: {
    addTitle(state, action) {
      state.title = action.payload;
    },
    addDescription(state, action) {
      state.description = action.payload;
    },
    setPriority(state, action) {},
    setStatus(state, action) {},
  },
});

export const { addTitle, addDescription, setPriority, setStatus } =
  popupFormSlice.actions;
export const formReducer = popupFormSlice.reducer;
