import { useState, useContext, createContext } from "react";

const AppStateContext = createContext();

export const AppStateProvider = ({ children }) => {
  const [sorted, setSorted] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isTopicOpen, setIsTopicOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("Select Topic");
  const [isPriorityOpen, setIsPriorityOpen] = useState(false);
  const [selectedPriority, setSelectedPriority] = useState("Select Priority");
  const [priorityColor, setPriorityColor] = useState("");
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("Select Status");
  const [statusColor, setStatusColor] = useState("");

  const handleOpenAndClose = (fun) => {
    fun((prev) => !prev);
  };
  const handleSelectedItem = (fun, topic) => {
    fun(topic);
  };
  const handleSelectedPriority = (priority) => {
    setSelectedPriority(priority);
  };
  const handlePriorityColor = (color) => {
    setPriorityColor(color);
  };
  const handleSelectedStatus = (status) => {
    setSelectedStatus(status);
  };
  const handleStatusColor = (color) => {
    setStatusColor(color);
  };

  const handleInitialState = () => {
    setIsPopupOpen(false);
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
        isSidebarOpen,
        isPriorityOpen,
        selectedPriority,
        handleSelectedPriority,
        priorityColor,
        handlePriorityColor,
        handleSelectedStatus,
        handleStatusColor,
        setIsStatusOpen,
        setIsPriorityOpen,
        isStatusOpen,
        selectedStatus,
        statusColor,
        handleInitialState,
        handleOpenAndClose,
        handleSelectedItem,
        isTopicOpen,
        setIsTopicOpen,
        selectedTopic,
        setSelectedTopic,
        setSorted,
        setIsPopupOpen,
        setIsSidebarOpen,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => useContext(AppStateContext);
