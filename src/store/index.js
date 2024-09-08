import { configureStore } from "@reduxjs/toolkit";
import {
  formReducer,
  addTitle,
  addDescription,
  setPriority,
  setStatus,
  reset,
  setStatusColor,
  setPriorityColor,
  addTopic,
} from "./slices/board/popupFormSlice";

import {
  addTask,
  taskReducer,
  addTasksHolder,
  setTopic,
  resetTopic,
  removeTask,
} from "./slices/board/taskSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
    task: taskReducer,
  },
});

export {
  store,
  addTitle,
  addDescription,
  setPriority,
  setStatus,
  reset,
  setStatusColor,
  setPriorityColor,
  addTask,
  addTopic,
  addTasksHolder,
  setTopic,
  resetTopic,
  removeTask,
};
