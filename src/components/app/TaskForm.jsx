import { RxDragHandleDots2 } from "react-icons/rx";
import { IoTrashOutline } from "react-icons/io5";
import { useFormData } from "../../";
import { useDispatch, useSelector } from "react-redux";
import { removeTaskFromBoard } from "../../store";

const TaskForm = ({ className, topic, listOfTasks }) => {
  const dispatch = useDispatch();
  const { priorityColor, statusColor } = useFormData();
  // const tasks = useSelector((state) => state.task.tasksHolder);

  const handleRemoveTask = (id) => {
    dispatch(removeTaskFromBoard({ id, topic }));
  };

  return listOfTasks.map((task, i) => {
    // console.log(task, statusColor, priorityColor);
    return (
      <div
        key={`${topic}-${i}`}
        className={`${className} col-span-2 bg-gray p-4 rounded-xl`}
      >
        <div className="flex items-center justify-between">
          <span className="text-xl text-offWhite mb-2 block cursor-grab w-fit rotate-90">
            <RxDragHandleDots2 />
          </span>
          <span
            className="text-xl text-offWhite cursor-pointer active:translate-x-[2px] duration-100"
            onClick={() => {
              handleRemoveTask(task.id);
              console.log("clicked");
            }}
          >
            <IoTrashOutline />
          </span>
        </div>
        <h3 className="text-offWhite text-[17px]">{task.title}</h3>
        <p className="text-sm text-lightGray">{task.description}</p>
        <div className="mt-3 flex items-center gap-2">
          <span
            className={`text-${priorityColor} bg-darkGray py-1 px-2 rounded-lg w-fit text-xs`}
          >
            {task.priority.name}
          </span>
          <span
            className={`text-${statusColor} bg-darkGray py-1 px-2 rounded-lg w-fit text-xs`}
          >
            {task.status.name}
          </span>
        </div>
      </div>
    );
  });
};

export default TaskForm;
