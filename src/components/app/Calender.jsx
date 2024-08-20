import { AppNavbar, FilterItems, CalenderStructure } from "../../";

const Calender = () => {
  return (
    <div className="flex-1 h-screen bg-veryDarkGray px-6">
      <AppNavbar />
      <FilterItems />
      <CalenderStructure />
    </div>
  );
};

export default Calender;
