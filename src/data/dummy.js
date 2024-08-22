import { IoCalendar } from "react-icons/io5";
import { FaFolder, FaList, FaTasks, FaInbox } from "react-icons/fa";

export const styleLinksInNav =
  "text-[17px] font-medium hover:text-purple duration-300 text-offWhite before:left-0 before:bottom-[-3px] before:w-0 before:h-[3px] before:bg-purple before:rounded hover:before:w-full before:absolute relative before:duration-300";

export const hoverStyling =
  "before:-top-full before:left-0 before:w-full before:h-full before:rounded-full before:bg-purple before:absolute hover:before:top-0 before:duration-500 before:-z-[1]";

export const styleOfLogo =
  "block w-12 h-12 rounded-full bg-purple relative before:absolute before:w-8 before:h-8 before:bg-darkGray before:rounded-full before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2";

export const stylingPath =
  "before:absolute before:left-0 before:-bottom-[30px] before:w-[2px] before:h-[25px] before:bg-gray after:absolute after:left-[2px] after:-bottom-[30px] after:w-[30px] after:h-[2px] after:bg-gray";

export const styleFilterSection =
  "text-offWhite bg-gray border rounded-[10px] px-4 py-2 cursor-pointer flex items-center gap-2 active:scale-[0.9] duration-300 select-none";

export const stylePseudoInLi =
  "before:absolute before:left-0 before:-bottom-[20px] before:bg-gray before:w-full before:h-2";

export const liStyling =
  "text-[17px] text-slate-500 font-medium flex items-center gap-2";

export const titleStyling = "text-offWhite font-medium text-[18px] mb-2";

export const inputStyles =
  "px-2 py-3 rounded-[10px] border border-lightGray w-full focus:outline-none focus:placeholder:opacity-0 placeholder:duration-300 placeholder:text-sm bg-transparent";

export const pagesLinks = [
  {
    link: "/app/calender",
    icon: IoCalendar,
    name: "Calendar",
  },
  {
    link: "/app/board",
    icon: FaFolder,
    name: "Board",
  },
  {
    link: "/app/list",
    icon: FaList,
    name: "List",
  },
  {
    link: "/app/my-tasks",
    icon: FaTasks,
    name: "My Tasks",
  },
  {
    link: "/app/inbox",
    icon: FaInbox,
    name: "Inbox",
  },
];
