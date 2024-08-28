import { Route, Routes } from "react-router-dom";
import {
  HomePage,
  AppHomePage,
  CalenderPage,
  BoardPage,
  ListPage,
  MyTaskPage,
} from "./";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/app" element={<AppHomePage />} />
        <Route path="/app/calender" element={<CalenderPage />} />
        <Route path="/app/board" element={<BoardPage />} />
        <Route path="/app/list" element={<ListPage />} />
        <Route path="/app/my-tasks" element={<MyTaskPage />} />
      </Routes>
    </>
  );
};

export default App;
