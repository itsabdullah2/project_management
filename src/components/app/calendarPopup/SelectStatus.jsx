import { useAppState } from "../../../";
import { statuses } from "../../../data/dummy";

const SelectStatus = () => {
  const { handleSelectedStatus, handleStatusColor, handleStatusPopup } =
    useAppState();
  return (
    <div
      className={`absolute right-0 -bottom-[115px] duration-300 origin-top-right rounded-[10px] border border-lightGray py-2 px-3 bg-darkGray w-full`}
    >
      <ul>
        {statuses.map((status) => (
          <li
            key={status.name}
            className={`text-${status.color} flex items-center gap-3 cursor-pointer`}
            onClick={() => {
              handleStatusPopup();
              handleSelectedStatus(status.name);
              handleStatusColor(status.color);
            }}
          >
            {/* {<status.icon />} */}
            <span className={`text-lightGray text-[15px]`}>{status.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectStatus;
