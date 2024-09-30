import { Sidebar, MyTask } from "../../";

const MyTaskPage = () => {
  return (
    <div className="grid grid-cols-12 relative">
      <Sidebar />
      <MyTask />
    </div>
  );
};

export default MyTaskPage;
