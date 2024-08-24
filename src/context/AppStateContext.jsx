import { useState, useContext, createContext } from "react";

const AppStateContext = createContext();

export const AppStateProvider = ({ children }) => {
  const [sorted, setSorted] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isPriorityOpen, setIsPriorityOpen] = useState(false);
  const [selectedPriority, setSelectedPriority] = useState("Select Priority");
  const [priorityColor, setPriorityColor] = useState("");
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("Select Status");
  const [statusColor, setStatusColor] = useState("");

  const handleOpenPopup = () => {
    setIsPopupOpen((prev) => !prev);
  };
  const handleSort = () => {
    setSorted((prev) => !prev);
  };
  const handleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  const handlePriorityPopup = () => {
    setIsPriorityOpen((prev) => !prev);
  };
  const handleSelectedPriority = (priority) => {
    setSelectedPriority(priority);
  };
  const handlePriorityColor = (color) => {
    setPriorityColor(color);
  };
  const handleStatusPopup = () => {
    setIsStatusOpen((prev) => !prev);
  };
  const handleSelectedStatus = (status) => {
    setSelectedStatus(status);
  };
  const handleStatusColor = (color) => {
    setStatusColor(color);
  };

  const handleInitialState = () => {
    handleOpenPopup();
    handleStatusColor("");
    handlePriorityColor("");
    handleSelectedPriority("Select Priority");
    handleSelectedStatus("Select Status");
  };

  return (
    <AppStateContext.Provider
      value={{
        sorted,
        isPopupOpen,
        handleOpenPopup,
        handleSort,
        isSidebarOpen,
        handleSidebar,
        handlePriorityPopup,
        isPriorityOpen,
        selectedPriority,
        handleSelectedPriority,
        priorityColor,
        handlePriorityColor,
        handleStatusPopup,
        handleSelectedStatus,
        handleStatusColor,
        isStatusOpen,
        selectedStatus,
        statusColor,
        handleInitialState,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => useContext(AppStateContext);
