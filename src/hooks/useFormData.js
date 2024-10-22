import { useSelector, useDispatch } from "react-redux";
import {
  addTitle,
  addDescription,
  reset,
  addTaskInBoard,
  addTasksHolder,
  resetTopic,
  addTask,
  addTaskTitle,
  resetInMyTasks,
} from "../store";
import { nanoid } from "nanoid";

const useFormData = () => {
  const dispatch = useDispatch();

  const title = useSelector((state) => state.form.title);
  const description = useSelector((state) => state.form.description);
  const priorityName = useSelector((state) => state.form.priority.name);
  const priorityColor = useSelector((state) => state.form.priority.color);
  const statusName = useSelector((state) => state.form.status.name);
  const statusColor = useSelector((state) => state.form.status.color);
  const listOfTasks = useSelector((state) => state.task.tasksHolder);
  // Select the tasks of My Tasks from the store
  const taskTitle = useSelector((state) => state.taskForm.taskTitle);
  const taskTimeFrom = useSelector((state) => state.taskForm.time.from);
  const taskTimeTo = useSelector((state) => state.taskForm.time.to);
  const taskPriorityName = useSelector((state) => state.taskForm.priority.name);
  const taskPriorityColor = useSelector(
    (state) => state.taskForm.priority.color
  );
  const isChecked = useSelector((state) => state.taskForm.isChecked);

  // Functions that responsible for handling the form add new task to the board
  const handleAddTitle = (event) => {
    dispatch(addTitle(event.target.value));
  };
  const handleAddDescription = (event) => {
    dispatch(addDescription(event.target.value));
  };
  const handleReset = () => {
    dispatch(reset());
  };

  // Function that responsible for adding a new task to the board
  const handleAddTask = (taskHolder) => {
    if (!title || !description) return;

    const newTask = {
      id: nanoid(), // Generate a unique ID
      topic: taskHolder,
      title,
      description,
      priority: {
        name: priorityName,
        color: priorityColor,
      },
      status: {
        name: statusName,
        color: statusColor,
      },
    };

    dispatch(addTaskInBoard(newTask));
  };

  // Function that responsible for adding a new task to the my tasks
  const handleAddTaskInMyTasks = () => {
    if (!title) return;
    const newTask = {
      id: nanoid(), // Generate a unique ID
      taskTitle,
      time: {
        from: taskTimeFrom,
        to: taskTimeTo,
      },
      priority: {
        name: taskPriorityName,
        color: taskPriorityColor,
      },
      isChecked,
    };

    dispatch(addTask(newTask));
  };

  // Functions that responsible for handling the form add new task to the my tasks
  const handleAddTaskTitle = (e) => {
    dispatch(addTaskTitle(e.target.value));
  };
  const handleResetInMyTasks = () => {
    dispatch(resetInMyTasks());
  };

  return {
    title,
    description,
    priorityName,
    priorityColor,
    statusName,
    statusColor,
    handleAddTitle,
    handleAddDescription,
    handleReset,
    listOfTasks,
    handleAddTask,
    handleAddTaskInMyTasks,
    handleAddTaskTitle,
    handleResetInMyTasks,
    taskTitle,
  };
};

export default useFormData;
