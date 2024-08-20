import { IoSearch } from "react-icons/io5";
import { stylingPath } from "../../data/dummy";
import { useLocation } from "react-router-dom";

const AppNavbar = () => {
  const location = useLocation();
  const pathname = location.pathname.replace("/", "");

  const handleSearch = () => {};

  return (
    <div className="flex justify-between py-4 ">
      <div className={`flex gap-4 relative ${stylingPath}`}>
        <h2 className="text-offWhite text-3xl font-bold">Welcome, User</h2>
        <span className="text-gray text-[18px] self-end">
          Keep moving forward!
        </span>
        <span className="absolute -bottom-[40px] left-[40px] text-gray text-[17px] font-medium">
          {pathname}
        </span>
      </div>

      <div className="relative flex items-center bg-gray px-3 py-2 rounded-[10px] gap-2">
        <IoSearch
          size={25}
          className="text-lightGray cursor-pointer"
          onClick={handleSearch}
        />
        <input
          type="search"
          placeholder="Search"
          className="bg-transparent placeholder:text-lightGray focus:placeholder:opacity-0 placeholder:duration-300 focus:outline-none caret-purple"
        />
      </div>
    </div>
  );
};

export default AppNavbar;
