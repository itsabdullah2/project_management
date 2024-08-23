import { AppNavbar, FilterItems } from "../../";

const AppHome = () => {
  return (
    <div className="h-screen bg-veryDarkGray text-offWhite flex-1 px-6">
      <AppNavbar />
      <FilterItems />
    </div>
  );
};

export default AppHome;
