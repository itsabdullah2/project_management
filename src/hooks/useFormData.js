import { useSelector, useDispatch } from "react-redux";
import {
  addTitle,
  addDescription,
  reset,
  addTaskInBoard,
  addTasksHolder,
  resetTopic,
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
  const listOfTasks = useSelector((state) => state.task.tasks);
  const topic = useSelector((state) => state.task.topic);

  const handleAddTitle = (event) => {
    dispatch(addTitle(event.target.value));
  };
  const handleAddDescription = (event) => {
    dispatch(addDescription(event.target.value));
  };
  const handleReset = () => {
    dispatch(reset());
  };

  const handleAddTask = () => {
    if (!title || !description) return;

    const newTask = {
      id: nanoid(),
      topic,
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
  };
};

export default useFormData;
