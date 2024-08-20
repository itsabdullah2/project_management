import { IoBookmarkOutline, IoFilter, IoAddOutline } from "react-icons/io5";
import { FaSort } from "react-icons/fa";
import { styleFilterSection } from "../../data/dummy";

const FilterItems = () => {
  return (
    <div className="mt-14">
      <div className="flex items-center justify-between">
        <div className={`${styleFilterSection} border-lightGray`}>
          <IoBookmarkOutline /> <span>Priority</span>
        </div>

        <div className="flex items-center gap-4">
          <div className={`${styleFilterSection} border-lightGray`}>
            <FaSort />
            <span>Sort</span>
          </div>
          <div className={`${styleFilterSection} border-lightGray`}>
            <IoFilter />
            <span>More Filter</span>
          </div>
          <div className={`${styleFilterSection} bg-purple border-purple`}>
            <IoAddOutline /> <span>Add Task</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterItems;
