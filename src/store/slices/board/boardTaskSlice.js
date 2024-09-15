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
        // state.tasksHolder[topic] = [];
        return;
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
      if (!state.topicsHolder.includes(action.payload)) {
        state.topicsHolder.push(action.payload);
        state.tasksHolder[action.payload] = [];
      }
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
} = taskSlice.actions;
export const boardTaskReducer = taskSlice.reducer;
