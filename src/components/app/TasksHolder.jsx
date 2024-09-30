import { IoTrashOutline } from "react-icons/io5";
import { TaskForm, useAppState, useAddTopic, useFormData } from "../../";

const TasksHolder = () => {
  const { topicsHolder, handleDeleteTasksHolder } = useAddTopic();
  const { handleOpenAndClose, setIsPopupOpen, setSelectedTopic } =
    useAppState();
  const { listOfTasks } = useFormData();

  return topicsHolder.length > 0
    ? topicsHolder.map((topic) => (
        <div
          key={topic.id}
          className=" w-[390px] bg-darkGray p-4 rounded-2xl flex flex-col"
        >
          <div className="flex items-center justify-between text-offWhite mb-3">
            <h3 className="text-lg font-normal select-none">{topic.name}</h3>
            <span
              className="cursor-pointer active:translate-x-[2px] duration-200"
              onClick={() => handleDeleteTasksHolder(topic.id)}
            >
              <IoTrashOutline size={22} />
            </span>
          </div>
          <div className="flex-1 flex flex-col gap-2 max-h-[600px] overflow-y-auto pr-2">
            <TaskForm
              listOfTasks={listOfTasks[topic.name] || []}
              topic={topic.name}
            />
          </div>
          <button
            type="button"
            className="bg-gray text-center mt-3 rounded-xl py-3 text-offWhite duration-100 active:translate-x-[2px] select-none"
            onClick={() => {
              handleOpenAndClose(setIsPopupOpen);
              setSelectedTopic(topic.name);
            }}
          >
            + Add New Task
          </button>
        </div>
      ))
    : null;
};

export default TasksHolder;
