import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { TaskForm, useAppState, useAddTopic } from "../../";

const TasksHolder = () => {
  const { topicsHolder } = useAddTopic();
  const { handleOpenAndClose, setIsPopupOpen } = useAppState();

  return topicsHolder.length > 0
    ? topicsHolder.map((topic, i) => (
        <div
          key={i}
          className="col-span-2 bg-darkGray p-4 rounded-2xl flex flex-col"
        >
          <div className="flex items-center justify-between text-offWhite mb-3">
            <h3 className="text-lg font-normal select-none">{topic}</h3>
            <span className="cursor-pointer">
              <HiOutlineDotsHorizontal size={22} />
            </span>
          </div>
          <div className="flex-1 flex flex-col gap-2 max-h-[600px] overflow-y-auto pr-2">
            <TaskForm />
          </div>
          <button
            type="button"
            className="bg-gray text-center mt-3 rounded-xl py-3 text-offWhite duration-100 active:translate-x-[2px]"
            onClick={() => handleOpenAndClose(setIsPopupOpen)}
          >
            + Add New Task
          </button>
        </div>
      ))
    : null;
};

export default TasksHolder;
