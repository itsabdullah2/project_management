import {
  IoMenu,
  IoSettingsOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoHome,
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
  const { isSidebarOpen, handleOpenAndClose, setIsSidebarOpen } = useAppState();

  return (
    <div
      className={`${className} transform transition-all duration-300 ${
        isSidebarOpen ? " col-span-2" : "col-span-1"
      } bg-darkGray text-offWhite p-2 md:p-5 h-screen flex flex-col items-center md:items-start`}
    >
      <div className="flex-1 w-full md:w-auto mx-auto md:mx-0">
        <div className="flex items-center justify-between text-lightGray mb-10">
          <span className={`${styleOfLogo}`} />
          <IoMenu
            size={30}
            className="cursor-pointer hover:text-offWhite duration-300 hidden md:block"
            onClick={() => handleOpenAndClose(setIsSidebarOpen)}
          />
        </div>

        <div className="border border-lightGray rounded-[10px] px-1 md:py-3 md:px-3 mb-10 w-full mx-auto md:mx-0">
          {/* <h3 className={`${titleStyling}`}>Pages</h3> */}
          <ul className={`flex flex-col items-center md:items-start gap-3`}>
            {pagesLinks.map((pageLink) => (
              <Link to={pageLink.link} key={pageLink.name}>
                <li className={`${liStyling}`} title={pageLink.name}>
                  {<pageLink.icon className="text-[15px] xl:text-[17px]" />}
                  <span
                    className={`hidden md:block ${
                      isSidebarOpen ? "" : "text-[15px]"
                    }
                    text-[15px] xl:text-[17px]`}
                  >
                    {pageLink.name}
                  </span>
                </li>
              </Link>
            ))}
          </ul>
        </div>

        {/* <div className="border border-lightGray rounded-[10px] p-3 mb-10 hidden">
          <h3 className={`${titleStyling}`}>Progress</h3>
          <div className="flex items-center justify-between">
            <span className="text-[17px] text-offWhite">0%</span>
            <span className="text-xs text-offWhite">0/0 tasks done</span>
          </div>
          <span
            className={`block bg-veryDarkGray h-[5px] w-full mt-2 rounded-xl relative before:absolute before:h-full before:w-0 before:bg-purple before:left-0 before:top-0 overflow-hidden`}
          />
        </div> */}

        {/* Calender will display here */}
      </div>

      <ul className="flex flex-col items-center md:items-start gap-3">
        <Link to="#">
          <li className={`${liStyling}`}>
            <IoSettingsOutline size={25} />
            <span className="hidden md:block">Settings</span>
          </li>
        </Link>
        <Link to="/">
          <li className={`${liStyling}`}>
            <IoHome size={25} />
            <span className="hidden md:block">Home</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
