import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import {
  SelectPriority,
  SelectStatus,
  useAppState,
  useFormData,
} from "../../../";
import { inputStyles, popupBtnStyle, dropdownBtn } from "../../../data/dummy";

const CalendarTaskPopup = () => {
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
    handleSave,
  } = useFormData();
  const {
    isPopupOpen,
    handlePriorityPopup,
    isPriorityOpen,
    isStatusOpen,
    handleStatusPopup,
    handleOpenPopup,
  } = useAppState();

  return (
    <>
      {isPopupOpen && (
        <>
          <div className="absolute left-0 top-0 w-full h-full bg-black opacity-50" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-offWhite bg-gray rounded-2xl px-5 py-8 w-[500px]">
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
                <label htmlFor="date">Date</label>
                <div className="flex items-center gap-4">
                  <input
                    type="text"
                    placeholder="Add the start date"
                    className={`${inputStyles}`}
                  />
                  <span>To</span>
                  <input
                    type="text"
                    placeholder="Add the expired date"
                    className={`${inputStyles}`}
                  />
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="flex-1 flex flex-col gap-1 relative">
                  <div>Priority</div>
                  <button
                    className={`${dropdownBtn} border-${priorityColor}`}
                    onClick={handlePriorityPopup}
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
                    onClick={handleStatusPopup}
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
                  handleOpenPopup();
                }}
              >
                Cancel
              </button>
              <button
                className={`bg-purple ${popupBtnStyle}`}
                onClick={() => {
                  handleSave();
                  handleReset();
                  handleOpenPopup();
                }}
              >
                Save
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CalendarTaskPopup;
