import { useState } from "react";
import { AppNavbar, FilterItems, useAppState, TasksProgress } from "../../";

const AppHome = () => {
  const [value, setValue] = useState(0);
  const { isSidebarOpen } = useAppState();

  return (
    <div
      className={`h-screen bg-veryDarkGray text-offWhite px-6 ${
        isSidebarOpen ? "col-span-10" : "col-span-11"
      }`}
    >
      <AppNavbar />
      <FilterItems />
      <div className="mt-5">
        <TasksProgress />
      </div>
    </div>
  );
};

export default AppHome;
