import { HiOutlineDotsHorizontal } from "react-icons/hi";
import {
  useAppState,
  AppNavbar,
  FilterItems,
  TaskForm,
  CalendarTaskPopup,
} from "../../";

const Board = () => {
  const { isSidebarOpen, isPopupOpen } = useAppState();

  return (
    <div
      className={`h-screen bg-veryDarkGray px-6 relative ${
        isSidebarOpen ? "col-span-10" : "col-span-11"
      }`}
    >
      <AppNavbar />
      <FilterItems />
      <div className={`grid grid-cols-10 gap-2 mt-5`}></div>
      {isPopupOpen && <CalendarTaskPopup />}
      <div className="grid grid-cols-10 gap-2">
        <div className="col-span-2 bg-darkGray p-4 rounded-lg flex flex-col">
          <div className="flex items-center justify-between text-offWhite mb-3">
            <h3 className="text-lg font-normal select-none">To do</h3>
            <span className="cursor-pointer">
              <HiOutlineDotsHorizontal size={22} />
            </span>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <TaskForm />
          </div>
          <button
            type="button"
            className="bg-gray text-center mt-3 rounded-md py-3 text-offWhite"
          >
            + Add New Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default Board;
