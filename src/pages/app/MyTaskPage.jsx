import { Sidebar, MyTask } from "../../";

const MyTaskPage = () => {
  return (
    <div className="grid grid-cols-12">
      <Sidebar />
      <MyTask />
    </div>
  );
};

export default MyTaskPage;
