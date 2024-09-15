import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  description: "",
  priority: {
    name: "Select Priority",
    color: "gray",
  },
  status: {
    name: "Select Status",
    color: "gray",
  },
  topics: ["To do", "Doing", "Done"],
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
    setPriority(state, action) {
      state.priority.name = action.payload;
    },
    setPriorityColor(state, action) {
      state.priority.color = action.payload;
    },
    setStatus(state, action) {
      state.status.name = action.payload;
    },
    setStatusColor(state, action) {
      state.status.color = action.payload;
    },
    reset(state, action) {
      return initialState;
    },
    addTopic(state, action) {
      state.topics.push(action.payload);
    },
  },
});

export const {
  addTitle,
  addDescription,
  setPriority,
  setStatus,
  reset,
  setStatusColor,
  setPriorityColor,
  addTopic,
} = popupFormSlice.actions;
export const formReducer = popupFormSlice.reducer;
