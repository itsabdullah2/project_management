import {
  useAppState,
  AppNavbar,
  WorkingOnIt,
  FilterItems,
  TaskItem,
  AddTaskPopup,
} from "../../";

const MyTask = () => {
  const { isSidebarOpen, setIsPopupOpen, isPopupOpen } = useAppState();

  return (
    <div
      className={`h-screen bg-veryDarkGray px-6 ${
        isSidebarOpen ? "col-span-10" : "col-span-11"
      }`}
    >
      <AppNavbar />
      <FilterItems setState={setIsPopupOpen} />
      {isPopupOpen && <AddTaskPopup />}
      <div className="grid grid-cols-9 gap-3 mt-10">
        <TaskItem />
      </div>
    </div>
  );
};

export default MyTask;
