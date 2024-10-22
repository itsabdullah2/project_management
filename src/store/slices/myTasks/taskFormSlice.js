import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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

const taskFormSlice = createSlice({
  name: "taskForm",
  initialState: initialState,
  reducers: {
    addTaskTitle(state, action) {
      state.taskTitle = action.payload;
    },
    addTaskTimeFrom(state, action) {
      state.time.from = action.payload;
    },
    addTaskTimeTo(state, action) {
      state.time.to = action.payload;
    },
    addTaskPriorityName(state, action) {
      state.priority.name = action.payload;
    },
    addTaskPriorityColor(state, action) {
      state.priority.color = action.payload;
    },
    addTaskIsChecked(state, action) {
      state.isChecked = action.payload;
    },
    resetInMyTasks(state, action) {
      return initialState;
    },
  },
});

export const {
  addTaskTitle,
  addTaskTimeTo,
  addTaskTimeFrom,
  addTaskPriorityName,
  addTaskPriorityColor,
  addTaskIsChecked,
  resetInMyTasks,
} = taskFormSlice.actions;
export const taskFormReducer = taskFormSlice.reducer;
