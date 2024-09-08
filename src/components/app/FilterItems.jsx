import { IoBookmarkOutline, IoFilter, IoAddOutline } from "react-icons/io5";
import { FaSort, FaSortDown } from "react-icons/fa";
import { styleFilterSection } from "../../data/dummy";
import { useAppState, SelectTopic } from "../../";

const FilterItems = ({ className }) => {
  const {
    sorted,
    handleSort,
    handleOpenAndClose,
    setIsPopupOpen,
    isTopicOpen,
    setIsTopicOpen,
  } = useAppState();

  return (
    <div className={`mt-14 ${className}`}>
      <div className="flex items-center justify-between relative">
        <div
          className={`${styleFilterSection} border-lightGray`}
          onClick={handleSort}
        >
          {sorted ? <FaSortDown /> : <FaSort />}
          <span>Sort</span>
        </div>
        <div className="flex items-center gap-4">
          <div className={`${styleFilterSection} border-lightGray`}>
            <IoFilter />
            <span>More Filter</span>
          </div>
          <div
            className={`${styleFilterSection} bg-purple border-purple relative`}
            onClick={() => handleOpenAndClose(setIsTopicOpen)}
          >
            <span className="text-lg font-semibold">+</span>
            <span>New</span>
          </div>
        </div>
        {isTopicOpen && <SelectTopic />}
      </div>
    </div>
  );
};

export default FilterItems;
