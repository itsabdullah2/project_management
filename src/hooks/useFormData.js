import { useSelector, useDispatch } from "react-redux";
import { addTitle, addDescription, reset } from "../store";

const useFormData = () => {
  const dispatch = useDispatch();

  const title = useSelector((state) => state.form.title);
  const description = useSelector((state) => state.form.description);
  const priorityName = useSelector((state) => state.form.priority.name);
  const priorityColor = useSelector((state) => state.form.priority.name);
  const statusName = useSelector((state) => state.form.status.name);
  const statusColor = useSelector((state) => state.form.status.color);

  const handleAddTitle = (event) => {
    dispatch(addTitle(event.target.value));
  };
  const handleAddDescription = (event) => {
    dispatch(addDescription(event.target.value));
  };
  const handleReset = () => {
    dispatch(reset());
  };
  const handleSave = () => {};

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
    handleSave,
  };
};

export default useFormData;
