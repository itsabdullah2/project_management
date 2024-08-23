import { useAppState } from "../../..";
import { priorities } from "../../../data/dummy";

const SelectPriority = () => {
  const { handlePriorityPopup, handleSelectedPriority, handlePriorityColor } =
    useAppState();

  return (
    <div
      className={`absolute right-0 -bottom-[115px] duration-300 origin-top-right rounded-[10px] border border-lightGray py-2 px-3 bg-darkGray w-full`}
    >
      <ul>
        {priorities.map((priority) => (
          <li
            key={priority.name}
            className={`text-${priority.color} flex items-center gap-3 cursor-pointer`}
            onClick={() => {
              handlePriorityPopup();
              handleSelectedPriority(priority.name);
              handlePriorityColor(priority.color);
            }}
          >
            {<priority.icon />}
            <span className={`text-lightGray text-[15px]`}>
              {priority.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectPriority;
