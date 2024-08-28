import { useFormData } from "../..";
import { RxDragHandleDots2 } from "react-icons/rx";

const TaskForm = ({ className }) => {
  const {
    title,
    description,
    priorityName,
    priorityColor,
    statusName,
    statusColor,
  } = useFormData();

  return (
    <div className={`${className} col-span-2 bg-gray p-4 rounded-[10px]`}>
      <span className="text-xl text-offWhite mb-2 block cursor-grab">
        <RxDragHandleDots2 />
      </span>
      <h3 className="text-offWhite text-[17px]">Your title</h3>
      <p className="text-sm text-lightGray">Your description</p>
      <div className="mt-3 flex items-center gap-2">
        <span className="text-offWhite bg-high py-1 px-2 rounded-lg w-fit text-xs">
          Priority
        </span>
        <span className="text-offWhite bg-normal py-1 px-2 rounded-lg w-fit text-xs">
          Status
        </span>
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-between text-offWhite mb-1">
          <p className="text-sm">Work on something</p>
          <span className="text-xs">50%</span>
        </div>
        <span
          className={`w-full block relative bg-darkGray h-1 rounded-md overflow-hidden before:absolute before:left-0 before:top-0 before:w-1/2 before:h-full before:bg-purple`}
        />
      </div>
    </div>
  );
};

export default TaskForm;
