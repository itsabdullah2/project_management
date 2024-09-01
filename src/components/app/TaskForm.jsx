import { RxDragHandleDots2 } from "react-icons/rx";
import { useFormData } from "../../";

const TaskForm = ({ className }) => {
  const { listOfTasks, priorityColor, statusColor } = useFormData();

  return listOfTasks.map((task, i) => (
    <div
      key={i}
      className={`${className} col-span-2 bg-gray p-4 rounded-[10px]`}
    >
      <span className="text-xl text-offWhite mb-2 block cursor-grab w-fit">
        <RxDragHandleDots2 />
      </span>
      <h3 className="text-offWhite text-[17px]">{task.title}</h3>
      <p className="text-sm text-lightGray">{task.description}</p>
      <div className="mt-3 flex items-center gap-2">
        <span
          className={`text-offWhite bg-high py-1 px-2 rounded-lg w-fit text-xs`}
        >
          {task.priority.name}
        </span>
        <span
          className={`text-offWhite bg-normal py-1 px-2 rounded-lg w-fit text-xs`}
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
