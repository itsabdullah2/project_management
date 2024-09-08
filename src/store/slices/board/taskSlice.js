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
    addTask(state, action) {
      state.tasks.push({
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
    removeTask(state, action) {
      const index = state.tasks.findIndex((task) => task.id === action.payload);
      if (index !== -1) {
        state.tasks.splice(index, 1);
      }
    },
    addTasksHolder(state, action) {
      state.topicsHolder.push(action.payload);
    },
    setTopic(state, action) {
      state.topic = action.payload;
    },
    resetTopic(state, action) {
      state.topic = "";
    },
  },
});

export const { addTask, addTasksHolder, setTopic, resetTopic, removeTask } =
  taskSlice.actions;
export const taskReducer = taskSlice.reducer;
