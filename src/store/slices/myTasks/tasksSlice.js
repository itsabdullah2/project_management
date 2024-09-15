import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const tasksSlice = createSlice({
  name: "myTasks",
  initialState: initialState,
  reducers: {
    addTask(state, action) {},
    removeTask(state, action) {},
    removeAll(state, action) {},
  },
});

export const { addTask, removeTask, removeAll } = tasksSlice.actions;
export const taskReducer = tasksSlice.reducer;
