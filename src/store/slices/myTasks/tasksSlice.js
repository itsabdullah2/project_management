import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "myTasks",
  initialState: initialState,
  reducers: {
    addTask(state, action) {
      const { taskTitle, time, priority, isChecked } = action.payload;

      const newTask = {
        id: nanoid(), // Generate Unique ID
        taskTitle,
        time: {
          from: time.from,
          to: time.to,
        },
        priority: {
          name: priority.name,
          color: priority.color,
        },
        isChecked,
      };

      // state.tasks.push(newTask);

      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };
    },
    removeTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    removeAll(state, action) {
      return initialState;
    },
  },
});

export const { addTask, removeTask, removeAll } = tasksSlice.actions;
export const taskReducer = tasksSlice.reducer;
