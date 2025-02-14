import {
  AppNavbar,
  FilterItems,
  CalenderStructure,
  useAppState,
  AddTaskPopup,
  WorkingOnIt,
} from "../../";

const Calender = () => {
  const { isPopupOpen, isSidebarOpen } = useAppState();

  return (
    <div
      className={`${
        isSidebarOpen ? "col-span-10" : "col-span-11"
      } h-screen bg-veryDarkGray px-6 relative`}
    >
      <AppNavbar />
      <FilterItems />
      {/* <CalenderStructure /> */}
      {/* {isPopupOpen && <AddTaskPopup />} */}
      <WorkingOnIt />
    </div>
  );
};

export default Calender;
