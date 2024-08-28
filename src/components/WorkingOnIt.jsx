import { IoSettingsOutline } from "react-icons/io5";

const WorkingOnIt = () => {
  return (
    <div className="top-0 left-0 bg-overlay absolute w-full h-full flex flex-col items-center justify-center gap-3">
      <IoSettingsOutline
        size={50}
        className="text-offWhite animate-spin-slow duration-500"
      />
      <h2 className="text-offWhite text-4xl">Working on It</h2>
    </div>
  );
};

export default WorkingOnIt;
