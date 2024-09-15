import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  topicsHolder: [],
  topic: "",
};

const taskSlice = createSlice({
  name: "task",
  initialState: initialState,
  reducers: {
    addTaskInBoard(state, action) {
      const { title, description, priority, status, topic } = action.payload;
      state.tasks.push({
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
        topic,
      });
    },
    removeTaskFromBoard(state, action) {
      const index = state.tasks.findIndex((task) => task.id === action.payload);
      if (index !== -1) {
        state.tasks.splice(index, 1);
      }
    },
    addTasksHolder(state, action) {
      if (!state.topicsHolder.includes(action.payload)) {
        state.topicsHolder.push(action.payload);
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
