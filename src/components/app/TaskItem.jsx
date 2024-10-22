import Checkbox from "@mui/material/Checkbox";
import { IoTrashOutline } from "react-icons/io5";
import { useAppState } from "../../";
import { useDispatch } from "react-redux";
import { removeTask } from "../../store";

const TaskItem = ({ tasks }) => {
  const dispatch = useDispatch();
  const { setIsOptionsOpen, handleOpenAndClose } = useAppState();

  const handleRemoveTask = (id) => {
    dispatch(removeTask(id));
  };

  console.log(tasks);

  return (
    tasks.length > 0 &&
    tasks.map((task) => {
      <div
        key={task.id}
        className="bg-gray py-4 px-5 col-span-3 rounded-xl relative"
      >
        <div className="flex items-center justify-between text-offWhite">
          <div className="flex items-center gap-2">
            <Checkbox
              defaultChecked={false}
              sx={{
                color: "#4f46e5",
                "&.Mui-checked": {
                  color: "#4f46e5",
                },
                padding: "0",
              }}
            />
            <label htmlFor="task">{task.taskTitle}</label>
          </div>
          <button
            type="button"
            onClick={() => handleRemoveTask(task.id)}
            className="cursor-pointer active:translate-x-[2px] duration-200"
          >
            <IoTrashOutline />
          </button>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="text-sm text-purple text-semibold self-end">
            {task.time.from} <span className="text-offWhite mx-1">To</span>{" "}
            {task.time.to}
          </div>
          <span className="bg-darkGray py-1 px-2 rounded-md text-offWhite text-sm">
            {/*TODO change the color of the text */}
            High
          </span>
        </div>
        {/* Coming Soon => Button to edit the task */}
      </div>;
    })
  );
};

export default TaskItem;
