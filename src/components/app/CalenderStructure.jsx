import { stylePseudoInLi } from "../../data/dummy";

const CalenderStructure = () => {
  return (
    <div className="flex flex-col justify-between">
      <div className="h-[450px] mt-4">
        <div className="border border-lightGray px-4 py-2 rounded-[10px] flex items-center justify-between gap-10">
          <ul className="flex items-center justify-between gap-2 text-offWhite text-xl font-light flex-1">
            <li className={`flex-1 relative ${stylePseudoInLi}`}>
              Mon
              <span className="absolute left-0 -bottom-[40px] text-sm text-offWhite">
                10
              </span>
            </li>
            <li className={`flex-1 relative ${stylePseudoInLi}`}>
              Tue
              <span className="absolute left-0 -bottom-[40px] text-sm text-offWhite">
                11
              </span>
            </li>
            <li className={`flex-1 relative ${stylePseudoInLi}`}>
              Wed
              <span className="absolute left-0 -bottom-[40px] text-sm text-offWhite">
                12
              </span>
            </li>
            <li className={`flex-1 relative ${stylePseudoInLi}`}>
              Thu
              <span className="absolute left-0 -bottom-[40px] text-sm text-offWhite">
                13
              </span>
            </li>
            <li className={`flex-1 relative ${stylePseudoInLi}`}>
              Fri
              <span className="absolute left-0 -bottom-[40px] text-sm text-offWhite">
                14
              </span>
            </li>
          </ul>
          <span className="text-purple font-bold text-[15px] cursor-pointer select-none">
            Show weekends
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between gap-2">
        <span className="flex-1 text-sm text-offWhite relative before:absolute before:left-0 before:-top-[10px] before:bg-gray before:w-full before:h-2">
          17
        </span>
        <span className="flex-1 text-sm text-offWhite relative before:absolute before:left-0 before:-top-[10px] before:bg-gray before:w-full before:h-2">
          19
        </span>
        <span className="flex-1 text-sm text-offWhite relative before:absolute before:left-0 before:-top-[10px] before:bg-gray before:w-full before:h-2">
          20
        </span>
        <span className="flex-1 text-sm text-offWhite relative before:absolute before:left-0 before:-top-[10px] before:bg-gray before:w-full before:h-2">
          21
        </span>
        <span className="flex-1 text-sm text-offWhite relative before:absolute before:left-0 before:-top-[10px] before:bg-gray before:w-full before:h-2">
          22
        </span>
      </div>
    </div>
  );
};

export default CalenderStructure;
