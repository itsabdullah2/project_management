import { AppHome, Sidebar } from "../../";

const AppHomePage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <AppHome />
    </div>
  );
};

export default AppHomePage;
