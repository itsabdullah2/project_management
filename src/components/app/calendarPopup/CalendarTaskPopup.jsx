import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { SelectPriority, SelectStatus, useAppState } from "../../../";
import { inputStyles } from "../../../data/dummy";

const CalendarTaskPopup = () => {
  const {
    isPopupOpen,
    handleOpenPopup,
    handlePriorityPopup,
    isPriorityOpen,
    selectedPriority,
    priorityColor,
    isStatusOpen,
    selectedStatus,
    statusColor,
    handleStatusPopup,
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
                    className={`flex items-center justify-between text-sm text-lightGray text-left border border-${priorityColor} rounded-[10px] py-2 px-3 active:scale-[0.9] duration-300`}
                    onClick={handlePriorityPopup}
                  >
                    <span>{selectedPriority}</span>
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
                    className={`flex items-center justify-between text-sm text-lightGray text-left border border-${statusColor} rounded-[10px] py-2 px-3 active:scale-[0.9] duration-300`}
                    onClick={handleStatusPopup}
                  >
                    <span>{selectedStatus}</span>
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

            <div className="ml-auto flex items-center gap-4 mt-12 justify-end">
              <button
                className="shrink-1 py-2 px-3 border text-offWhite border-purple rounded-[10px] active:scale-[0.9] duration-300"
                onClick={handleOpenPopup}
              >
                Cancel
              </button>
              <button className="shrink-1 py-2 px-3 border text-offWhite bg-purple rounded-[10px] border-purple active:scale-[0.9] duration-300">
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
