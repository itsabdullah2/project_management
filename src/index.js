// Import Landing page components
import Home from "./components/landing/Home";
import HomePage from "./pages/landing/HomePage";
import Navbar from "./components/landing/Navbar";
import OpenMenuIcon from "./components/landing/OpenMenuIcon";

// Import App components
import AppHome from "./components/app/AppHome";
import AppHomePage from "./pages/app/AppHomePage";
import Sidebar from "./components/app/Sidebar";
import AppNavbar from "./components/app/AppNavbar";
import FilterItems from "./components/app/FilterItems";
import Calender from "./components/app/Calender";
import CalenderStructure from "./components/app/CalenderStructure";
import StateBar from "./components/app/StateBar";
import CalendarTaskPopup from "./components/app/calendarPopup/CalendarTaskPopup";
import SelectPriority from "./components/app/calendarPopup/SelectPriority";
import SelectStatus from "./components/app/calendarPopup/SelectStatus";
import Board from "./components/app/Board";
import List from "./components/app/List";
import MyTask from "./components/app/MyTask";
import WorkingOnIt from "./components/WorkingOnIt";
import TaskForm from "./components/app/TaskForm";
// Import App Pages
import CalenderPage from "./pages/app/CalenderPage";
import BoardPage from "./pages/app/BoardPage";
import ListPage from "./pages/app/ListPage";
import MyTaskPage from "./pages/app/MyTaskPage";

// Import Context
import { useAppState } from "./context/AppStateContext";

// Import Data
import { styleLinksInNav, hoverStyling } from "./data/dummy";

// Import Custom Hook
import useFormData from "./hooks/useFormData";

export {
  Home,
  HomePage,
  Navbar,
  styleLinksInNav,
  hoverStyling,
  OpenMenuIcon,
  AppHome,
  AppHomePage,
  Sidebar,
  AppNavbar,
  CalenderPage,
  FilterItems,
  Calender,
  CalenderStructure,
  StateBar,
  useAppState,
  CalendarTaskPopup,
  SelectPriority,
  SelectStatus,
  useFormData,
  Board,
  List,
  MyTask,
  BoardPage,
  ListPage,
  MyTaskPage,
  WorkingOnIt,
  TaskForm,
};
