import { useDispatch } from "react-redux";
import { topics } from "../../../data/dummy";
import { useAppState, useAddTopic } from "../../../";
import { setTopic } from "../../../store";

const SelectTopic = () => {
  const dispatch = useDispatch();
  const { handleResetTopic, topic, handleAddTasksHolder } = useAddTopic();
  const { handleOpenAndClose, setIsTopicOpen } = useAppState();

  const handleCurrentTopic = (name) => {
    dispatch(setTopic(name));
  };

  return (
    <div
      className={`absolute right-0 -bottom-[145px] z-10 w-[200px] duration-300 origin-top-right rounded-[10px] border border-lightGray py-2 px-3 bg-darkGray`}
    >
      <ul className="mb-3">
        {topics.map((topic) => (
          <li
            key={topic.name}
            className={`text-lightGray flex items-center gap-3 cursor-pointer`}
            onClick={() => handleCurrentTopic(topic.name)}
          >
            <span className={`text-lightGray text-[15px]`}>{topic.name}</span>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between border-t border-lightGray pt-3">
        <button
          type="button"
          className="text-sm bg-purple text-offWhite py-1 px-2 rounded-md"
          onClick={() => {
            handleAddTasksHolder(topic);
            handleOpenAndClose(setIsTopicOpen);
            handleResetTopic();
          }}
        >
          Add
        </button>
        {topic && (
          <p className="text-sm text-offWhite py-1 px-2 border border-purple rounded-md">
            {topic}
          </p>
        )}
      </div>
    </div>
  );
};

export default SelectTopic;
