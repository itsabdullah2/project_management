import { useSelector } from "react-redux";
import {
  useAppState,
  AppNavbar,
  WorkingOnIt,
  FilterItems,
  TaskItem,
  AddTaskPopup,
} from "../../";

const MyTask = () => {
  const tasksList = useSelector((state) => state.myTasks.tasks);
  const { isSidebarOpen, setIsPopupOpen, isPopupOpen } = useAppState();

  return (
    <div
      className={`h-screen bg-veryDarkGray px-6 ${
        isSidebarOpen ? "col-span-10" : "col-span-11"
      }`}
    >
      <AppNavbar />
      <FilterItems setState={setIsPopupOpen} />
      {isPopupOpen && <AddTaskPopup inMyTask />}
      <div className="grid grid-cols-9 gap-3 mt-10">
        <TaskItem tasks={tasksList} />
      </div>
    </div>
  );
};

export default MyTask;
