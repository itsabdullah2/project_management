import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    data: [],
  },
  reducers: {
    addTask(state, action) {
      state.data.push({
        title: action.payload.title,
        description: action.payload.description,
        priority: {
          name: action.payload.priority.name,
          color: action.payload.priority.color,
        },
        status: {
          name: action.payload.status.name,
          color: action.payload.status.color,
        },
      });
    },
  },
});

export const { addTask } = taskSlice.actions;
export const taskReducer = taskSlice.reducer;
