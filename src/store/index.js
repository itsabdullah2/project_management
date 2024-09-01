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
} from "./slices/popupFormSlice";

import { addTask, taskReducer } from "./slices/taskSlice";

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
};
