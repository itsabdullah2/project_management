import { RxDragHandleDots2, RxTrash } from "react-icons/rx";
import { useFormData } from "../../";
import { useDispatch } from "react-redux";
import { removeTaskFromBoard } from "../../store";

const TaskForm = ({ className, topic, listOfTasks }) => {
  const dispatch = useDispatch();
  const { priorityColor, statusColor } = useFormData();

  const handleRemoveTask = (id) => {
    dispatch(removeTaskFromBoard({ id, topic }));
  };

  return listOfTasks.map((task, i) => (
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
          <RxTrash />
        </span>
      </div>
      <h3 className="text-offWhite text-[17px]">{task.title}</h3>
      <p className="text-sm text-lightGray">{task.description}</p>
      <div className="mt-3 flex items-center gap-2">
        <span
          className={`text-offWhite bg-${priorityColor} py-1 px-2 rounded-lg w-fit text-xs`}
        >
          {task.priority.name}
        </span>
        <span
          className={`text-offWhite bg-${statusColor} py-1 px-2 rounded-lg w-fit text-xs`}
        >
          {task.status.name}
        </span>
      </div>
      {/* Progress */}
      {/* <div className="mt-4">
        <div className="flex items-center justify-between text-offWhite mb-1">
          <p className="text-sm">Work on something</p>
          <span className="text-xs">50%</span>
        </div>
        <span
          className={`w-full block relative bg-darkGray h-1 rounded-md overflow-hidden before:absolute before:left-0 before:top-0 before:w-1/2 before:h-full before:bg-purple`}
        />
      </div> */}
    </div>
  ));
};

export default TaskForm;
