import { Calender, Sidebar } from "../../";

const CalenderPage = () => {
  return (
    <div className="grid grid-cols-12">
      <Sidebar />
      <Calender />
    </div>
  );
};

export default CalenderPage;
