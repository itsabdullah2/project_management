import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useAppState } from "../../";

const TaskItem = () => {
  const { isOptionsOpen, setIsOptionsOpen, handleOpenAndClose } = useAppState();

  return (
    <div className="bg-gray py-4 px-5 col-span-3 rounded-xl relative">
      <div className="flex items-center justify-between text-offWhite">
        <div className="flex items-center gap-2">
          <input type="checkbox" id="task" name="task" />
          <label htmlFor="task">Your task here</label>
        </div>
        <span onClick={() => handleOpenAndClose(setIsOptionsOpen)}>
          <HiOutlineDotsHorizontal
            size={20}
            className="cursor-pointer active:translate-x-[2px] duration-200"
          />
        </span>
      </div>
      <div className="my-2 text-sm text-purple text-semibold">
        08:30 <span className="text-offWhite mx-1">To</span> 09:20
      </div>
      <span className="bg-high py-1 px-2 rounded-md text-white text-sm">
        High
      </span>
      {/* Popup Options */}
      {isOptionsOpen && (
        <div
          className={`absolute -right-[150px] top-[30px] rounded-lg py-3 px-4 bg-gray w-36 origin-bottom-left`}
        >
          <div className="flex flex-col">
            <button className="text-offWhite w-full text-left text-lg pb-2 border-b border-darkGray font-semibold">
              Edit
            </button>
            <button className="text-offWhite w-full text-left text-lg pt-2 font-semibold">
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
