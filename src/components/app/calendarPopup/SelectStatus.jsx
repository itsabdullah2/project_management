import { useDispatch } from "react-redux";
import { useAppState } from "../../../";
import { statuses } from "../../../data/dummy";
import { setStatus, setStatusColor } from "../../../store";

const SelectStatus = () => {
  const dispatch = useDispatch();
  const { handleStatusPopup } = useAppState();

  const handleCurrentStatus = (status) => {
    dispatch(setStatus(status));
  };
  const handleCurrentColor = (color) => {
    dispatch(setStatusColor(color));
  };

  return (
    <div
      className={`absolute right-0 -bottom-[138px] duration-300 origin-top-right rounded-[10px] border border-lightGray py-2 px-3 bg-darkGray w-full`}
    >
      <ul>
        {statuses.map((status) => (
          <li
            key={status.name}
            className={`text-${status.color} flex items-center gap-3 cursor-pointer`}
            onClick={() => {
              handleStatusPopup();
              handleCurrentStatus(status.name);
              handleCurrentColor(status.color);
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
