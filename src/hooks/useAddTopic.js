import { useSelector, useDispatch } from "react-redux";
import { addTasksHolder, resetTopic, removeTasksHolder } from "../store";

const useAddTopic = () => {
  const dispatch = useDispatch();

  const topicsHolder = useSelector((state) => state.task.topicsHolder);
  const topic = useSelector((state) => state.task.topic);

  const handleAddTasksHolder = (topic) => {
    if (!topic) return;
    // check if the topic already exists in the tasksHolder array
    const topicExists = topicsHolder.some(
      (existingTopic) => existingTopic === topic
    );
    if (topicExists) return;

    dispatch(addTasksHolder(topic));
  };

  const handleDeleteTasksHolder = (id) => {
    dispatch(removeTasksHolder(id));
  };
  const handleResetTopic = () => {
    dispatch(resetTopic());
  };

  return {
    topicsHolder,
    topic,
    handleAddTasksHolder,
    handleDeleteTasksHolder,
    handleResetTopic,
  };
};

export default useAddTopic;
