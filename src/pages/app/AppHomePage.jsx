import { AppHome, Sidebar } from "../../";

const AppHomePage = () => {
  return (
    <div className="grid grid-cols-12">
      <Sidebar />
      <AppHome />
    </div>
  );
};

export default AppHomePage;
