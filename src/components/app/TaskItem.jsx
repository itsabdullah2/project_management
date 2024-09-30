import Checkbox from "@mui/material/Checkbox";
import { IoTrashOutline } from "react-icons/io5";
import { useAppState } from "../../";

const TaskItem = () => {
  const { setIsOptionsOpen, handleOpenAndClose } = useAppState();

  return (
    <div className="bg-gray py-4 px-5 col-span-3 rounded-xl relative">
      <div className="flex items-center justify-between text-offWhite">
        <div className="flex items-center gap-2">
          <Checkbox
            sx={{
              color: "#4f46e5",
              "&.Mui-checked": {
                color: "#4f46e5",
              },
              padding: "0",
            }}
          />
          <label htmlFor="task">Your task here</label>
        </div>
        <button
          type="button"
          onClick={() => handleOpenAndClose(setIsOptionsOpen)}
          className="cursor-pointer active:translate-x-[2px] duration-200"
        >
          <IoTrashOutline />
        </button>
      </div>
      <div className="flex items-center justify-between mt-3">
        <div className="text-sm text-purple text-semibold self-end">
          08:30 <span className="text-offWhite mx-1">To</span> 09:20
        </div>
        <span className="bg-darkGray py-1 px-2 rounded-md text-offWhite text-sm">
          {/*TODO change the color of the text */}
          High
        </span>
      </div>
      {/* Coming Soon => Button to edit the task */}
    </div>
  );
};

export default TaskItem;
