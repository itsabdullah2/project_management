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
      <div className={`grid grid-cols-10 gap-2 mt-5`}>
        <TaskForm />
        <TaskForm />
        <TaskForm />
        <TaskForm />
        <TaskForm />
      </div>
      {isPopupOpen && <CalendarTaskPopup />}
    </div>
  );
};

export default Board;
