import { AppNavbar, FilterItems, useAppState } from "../../";

const AppHome = () => {
  const { isSidebarOpen } = useAppState();

  return (
    <div
      className={`h-screen bg-veryDarkGray text-offWhite px-6 ${
        isSidebarOpen ? "col-span-10" : "col-span-11"
      }`}
    >
      <AppNavbar />
      <FilterItems />
    </div>
  );
};

export default AppHome;
