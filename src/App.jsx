import { Route, Routes } from "react-router-dom";
import { HomePage, AppHomePage, CalenderPage } from "./";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/app" element={<AppHomePage />} />
        <Route path="/app/calender" element={<CalenderPage />} />
      </Routes>
    </>
  );
};

export default App;
