import { Route, Routes } from "react-router-dom";
import { HomePage, AppHomePage } from "./";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/app" element={<AppHomePage />} />
      </Routes>
    </>
  );
};

export default App;
