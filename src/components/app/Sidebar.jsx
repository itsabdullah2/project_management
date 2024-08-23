import {
  IoMenu,
  IoSettingsOutline,
  IoLogInOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import {
  styleOfLogo,
  liStyling,
  titleStyling,
  pagesLinks,
} from "../../data/dummy";
import { useAppState } from "../../";

const Sidebar = ({ className }) => {
  const { isSidebarOpen, handleSidebar } = useAppState();

  return (
    <div
      className={`${className} transform transition-all duration-300 ${
        isSidebarOpen ? " col-span-2" : "col-span-1"
      } bg-darkGray text-offWhite p-5 h-screen flex flex-col`}
    >
      <div className="flex-1">
        <div className="flex items-center justify-between text-lightGray mb-10">
          <span className={`${styleOfLogo}`} />
          <IoMenu
            size={30}
            className="cursor-pointer hover:text-offWhite duration-300"
            onClick={handleSidebar}
          />
        </div>

        <div className="border border-lightGray rounded-[10px] p-3 mb-10">
          <h3 className={`${titleStyling}`}>Pages</h3>
          <ul className="flex flex-col gap-2">
            {pagesLinks.map((pageLink) => (
              <Link to={pageLink.link} key={pageLink.name}>
                <li className={`${liStyling}`}>
                  {<pageLink.icon />}
                  <span>{pageLink.name}</span>
                </li>
              </Link>
            ))}
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

        {/* Calender will display here */}
      </div>

      <ul>
        <Link to="#">
          <li className={`${liStyling}`}>
            <IoSettingsOutline />
            <span>Settings</span>
          </li>
        </Link>
        <Link to="#">
          <li className={`${liStyling}`}>
            <IoLogInOutline />
            <span>LogIn</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
