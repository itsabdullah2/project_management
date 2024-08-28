import { useDispatch } from "react-redux";
import { useAppState } from "../../..";
import { priorities } from "../../../data/dummy";
import { setPriority } from "../../../store";

const SelectPriority = () => {
  const dispatch = useDispatch();
  const { handlePriorityPopup } = useAppState();

  const handleCurrentPriority = (name) => {
    dispatch(setPriority(name));
  };

  return (
    <div
      className={`absolute right-0 -bottom-[115px] duration-300 origin-top-right rounded-[10px] border border-lightGray py-2 px-3 bg-darkGray w-full`}
    >
      <ul>
        {priorities.map((priority) => (
          <li
            key={priority.name}
            className={`flex items-center gap-3 cursor-pointer`}
            onClick={() => {
              handlePriorityPopup();
              handleCurrentPriority(priority.name);
            }}
          >
            {<priority.icon className={`text-${priority.color}`} />}
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
