import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import {
  SelectPriority,
  SelectStatus,
  useAppState,
  useFormData,
} from "../../..";
import { inputStyles, popupBtnStyle, dropdownBtn } from "../../../data/dummy";
// import { useState } from "react";

const AddTaskPopup = ({ inMyTask, inBoard }) => {
  // const [selectedTime, setSelectedTime] = useState();
  // console.log("Time Selected is:", selectedTime);
  const {
    priorityName,
    statusColor,
    statusName,
    title,
    description,
    priorityColor,
    handleAddTitle,
    handleAddDescription,
    handleReset,
    handleAddTask,
    handleAddTaskInMyTasks,
    handleAddTaskTitle,
    taskTitle,
  } = useFormData();
  const {
    isPopupOpen,
    isPriorityOpen,
    isStatusOpen,
    setIsPopupOpen,
    handleOpenAndClose,
    setIsPriorityOpen,
    setIsStatusOpen,
    selectedTopic,
  } = useAppState();

  const MUIInputStyle = {
    borderColor: "rgb(75 85 99)",
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "6px",
    "& .MuiInputBase-input": {
      color: "rgb(75 85 99)",
    },
    "& .MuiInputBase-input::focus": {
      outline: "none",
    },
    "& .MuiButtonBase-root": {
      color: "rgb(75 85 99)",
    },
  };

  // const handleTimeChange = (value) => {
  //   setSelectedTime(value);
  // console.log(value);
  // };

  return (
    <>
      {isPopupOpen && (
        <>
          <div className="absolute left-0 top-0 w-full z-20 h-full bg-black opacity-50" />
          <div className="absolute top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 text-offWhite bg-gray rounded-2xl px-5 py-8 w-[500px]">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="title" className="">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  placeholder="Add project name"
                  className={`${inputStyles}`}
                  value={title}
                  onChange={handleAddTitle}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="description" className="">
                  Description
                </label>
                <input
                  type="text"
                  id="description"
                  placeholder="Add project description"
                  className={`${inputStyles}`}
                  autoComplete="off"
                  value={description}
                  onChange={handleAddDescription}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="date">Time</label>
                <div className="flex items-center gap-4">
                  <TimePicker
                    sx={MUIInputStyle}
                    style={{ color: "#FBFBFB" }}
                    // value={selectedTime}
                    // onChange={handleTimeChange}
                  />
                  <span>To</span>
                  <TimePicker sx={MUIInputStyle} style={{ color: "#FBFBFB" }} />
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="flex-1 flex flex-col gap-1 relative">
                  <div>Priority</div>
                  <button
                    className={`${dropdownBtn} border-${priorityColor}`}
                    onClick={() => handleOpenAndClose(setIsPriorityOpen)}
                  >
                    <span>{priorityName}</span>
                    {isPriorityOpen ? (
                      <FaCaretDown size={20} />
                    ) : (
                      <FaCaretUp size={20} />
                    )}
                  </button>
                  {isPriorityOpen && <SelectPriority />}
                </div>

                <div className="flex-1 flex flex-col gap-1 relative">
                  <div>Status</div>
                  <button
                    className={`${dropdownBtn} border-${statusColor} `}
                    onClick={() => handleOpenAndClose(setIsStatusOpen)}
                  >
                    <span>{statusName}</span>
                    {isStatusOpen ? (
                      <FaCaretDown size={20} />
                    ) : (
                      <FaCaretUp size={20} />
                    )}
                  </button>
                  {isStatusOpen && <SelectStatus />}
                </div>
              </div>
            </div>

            <div className="ml-auto flex items-center gap-4 mt-20 justify-end">
              <button
                className={`${popupBtnStyle}`}
                onClick={() => {
                  handleReset();
                  handleOpenAndClose(setIsPopupOpen);
                }}
              >
                Cancel
              </button>
              <button
                className={`bg-purple ${popupBtnStyle}`}
                onClick={() => {
                  handleReset();
                  handleOpenAndClose(setIsPopupOpen);
                  handleAddTask(selectedTopic);
                }}
              >
                Add Task
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AddTaskPopup;
