import {
  useAppState,
  AppNavbar,
  FilterItems,
  TasksHolder,
  AddTaskPopup,
} from "../../";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const Board = () => {
  const { isSidebarOpen, isPopupOpen, setIsTopicOpen } = useAppState();

  return (
    <div
      className={`h-screen bg-veryDarkGray px-6 relative ${
        isSidebarOpen ? "col-span-10" : "col-span-11"
      }`}
    >
      <AppNavbar />
      <FilterItems setState={setIsTopicOpen} />
      <div className={`grid grid-cols-10 gap-2 mt-5`}></div>
      {isPopupOpen && <AddTaskPopup />}
      <div className="flex items-start gap-4">
        <div className="flex-1 flex items-start flex-wrap gap-2">
          <TasksHolder />
        </div>
      </div>
    </div>
  );
};

export default Board;
