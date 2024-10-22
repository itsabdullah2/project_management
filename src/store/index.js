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
  removeTasksHolder,
} from "./slices/board/boardTaskSlice";

// imports from TaskSlice from myTask Folder
import {
  addTask,
  removeTask,
  removeAll,
  taskReducer,
} from "./slices/myTasks/tasksSlice";

import {
  addTaskTitle,
  addTaskTimeFrom,
  addTaskTimeTo,
  addTaskPriorityName,
  addTaskPriorityColor,
  addTaskIsChecked,
  resetInMyTasks,
  taskFormReducer,
} from "./slices/myTasks/taskFormSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
    task: boardTaskReducer,
    myTasks: taskReducer,
    taskForm: taskFormReducer,
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
  removeTasksHolder,
  setTopic,
  resetTopic,
  removeTaskFromBoard,
  // Actions of my task page
  addTask,
  removeTask,
  removeAll,
  addTaskTitle,
  addTaskTimeFrom,
  addTaskTimeTo,
  addTaskPriorityName,
  addTaskPriorityColor,
  addTaskIsChecked,
  resetInMyTasks,
};
