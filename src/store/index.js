import { configureStore } from "@reduxjs/toolkit";

// Imports from PopupFormSlice
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
} from "./slices/popupFormSlice";

// Imports from TaskSlice from Board folder
import {
  addTaskInBoard,
  boardTaskReducer,
  addTasksHolder,
  setTopic,
  resetTopic,
  removeTaskFromBoard,
} from "./slices/board/boardTaskSlice";

// imports from TaskSlice from myTask Folder
import {
  addTask,
  removeTask,
  removeAll,
  taskReducer,
} from "./slices/myTasks/tasksSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
    task: boardTaskReducer,
    myTasks: taskReducer,
  },
});

export {
  store,
  // actions of the popup form
  addTitle,
  addDescription,
  setPriority,
  setStatus,
  reset,
  setStatusColor,
  setPriorityColor,
  // actions of board page
  addTaskInBoard,
  addTopic,
  addTasksHolder,
  setTopic,
  resetTopic,
  removeTaskFromBoard,
  // Actions of my task page
  addTask,
  removeTask,
  removeAll,
};
