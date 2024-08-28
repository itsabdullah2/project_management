import { Sidebar, Board } from "../../";

const BoardPage = () => {
  return (
    <div className="grid grid-cols-12">
      <Sidebar />
      <Board />
    </div>
  );
};

export default BoardPage;
