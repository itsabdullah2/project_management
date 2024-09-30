import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  tasksHolder: {},
  topicsHolder: [],
  topic: "",
};

const taskSlice = createSlice({
  name: "task",
  initialState: initialState,
  reducers: {
    addTaskInBoard(state, action) {
      const { title, description, priority, status, topic } = action.payload;
      if (!state.tasksHolder[topic]) {
        state.tasksHolder[topic] = [];
      }
      state.tasksHolder[topic].push({
        title,
        description,
        priority: {
          name: priority.name,
          color: priority.color,
        },
        status: {
          name: status.name,
          color: status.color,
        },
      });
    },
    removeTaskFromBoard(state, action) {
      const { topic, taskId } = action.payload;
      if (state.tasksHolder[topic]) {
        state.tasksHolder[topic] = state.tasksHolder[topic].filter(
          (task) => task.id !== taskId
        );
      }
    },
    addTasksHolder(state, action) {
      const isTasksHolderExists = state.topicsHolder.find(
        (item) => item.name === action.payload
      );
      if (!isTasksHolderExists) {
        const newTopic = { name: action.payload, id: nanoid() }; // Generate an unique ID
        state.topicsHolder.push(newTopic);
      }
      return;
    },
    removeTasksHolder(state, action) {
      state.topicsHolder = state.topicsHolder.filter(
        (item) => item.id !== action.payload
      );
    },
    setTopic(state, action) {
      state.topic = action.payload;
    },
    resetTopic(state, action) {
      state.topic = "";
    },
  },
});

export const {
  addTaskInBoard,
  addTasksHolder,
  setTopic,
  resetTopic,
  removeTaskFromBoard,
  removeTasksHolder,
} = taskSlice.actions;
export const boardTaskReducer = taskSlice.reducer;
