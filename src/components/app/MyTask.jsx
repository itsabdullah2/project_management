import { useAppState, AppNavbar, WorkingOnIt } from "../../";

const MyTask = () => {
  const { isSidebarOpen } = useAppState();

  return (
    <div
      className={`h-screen bg-veryDarkGray px-6 relative ${
        isSidebarOpen ? "col-span-10" : "col-span-11"
      }`}
    >
      <AppNavbar />
      <WorkingOnIt />
    </div>
  );
};

export default MyTask;
