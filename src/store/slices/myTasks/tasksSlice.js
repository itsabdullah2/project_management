/**
 * Manages the state of tasks in the application.
 *
 * The `tasksSlice` is a Redux Toolkit slice that handles the state of tasks, including adding new tasks, removing tasks, and resetting the entire state.
 *
 * The initial state includes the following properties:
 * - `tasks`: an array of task objects
 * - `taskTitle`: the title of a new task
 * - `time`: an object with `from` and `to` properties representing the time range of a task
 * - `priority`: an object with `name` and `color` properties representing the priority of a task
 * - `isChecked`: a boolean indicating whether a task is checked or not
 *
 * The slice provides the following actions:
 * - `addTask`: adds a new task to the `tasks` array
 * - `removeTask`: removes a task from the `tasks` array by its ID
 * - `removeAll`: resets the entire state to the initial state
 */
import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  tasks: [],
  taskTitle: "",
  time: {
    from: "",
    to: "",
  },
  priority: {
    name: "",
    color: "",
  },
  isChecked: false,
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
