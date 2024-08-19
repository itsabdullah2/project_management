import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { styleOfLogo } from "../../data/dummy";

const liStyling = "text-[17px] text-slate-500 font-medium";
const titleStyling = "text-offWhite font-medium text-[18px] mb-2";

const Sidebar = ({ className }) => {
  return (
    <div
      className={`${className} w-[300px] bg-darkGray text-offWhite p-5 h-screen flex flex-col`}
    >
      <div className="flex-1">
        <div className="flex items-center justify-between text-lightGray mb-10">
          <span className={`${styleOfLogo}`} />
          <IoMenu size={30} />
        </div>

        <div className="border border-lightGray rounded-[10px] p-3 mb-10">
          <h3 className={`${titleStyling}`}>Pages</h3>
          <ul className="flex flex-col gap-2">
            <Link to="/app/calender">
              <li className={`${liStyling}`}>Calender</li>
            </Link>
            <Link to="/app/board">
              <li className={`${liStyling}`}>Board</li>
            </Link>
            <Link to="/app/list">
              <li className={`${liStyling}`}>List</li>
            </Link>
            <Link to="/app/My-tasks">
              <li className={`${liStyling}`}>My Tasks</li>
            </Link>
            <Link to="/app/inbox">
              <li className={`${liStyling}`}>Inbox</li>
            </Link>
          </ul>
        </div>

        <div className="border border-lightGray rounded-[10px] p-3 mb-10">
          <h3 className={`${titleStyling}`}>Progress</h3>
          <div className="flex items-center justify-between">
            <span className="text-[17px] text-offWhite">50%</span>
            <span className="text-xs text-offWhite">3/6 tasks done</span>
          </div>
          <span
            className={`block bg-veryDarkGray h-[5px] w-full mt-2 rounded-xl relative before:absolute before:h-full before:w-[50%] before:bg-purple before:left-0 before:top-0 overflow-hidden`}
          />
        </div>

        {/* Calender will be here */}
      </div>

      <ul>
        <li className={`${liStyling}`}>
          <Link to="#">Settings</Link>
        </li>
        <li className={`${liStyling}`}>
          <Link to="#">LogIn</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
