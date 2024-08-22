import { useState, useContext, createContext } from "react";

const AppStateContext = createContext();

export const AppStateProvider = ({ children }) => {
  const [sorted, setSorted] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleOpenPopup = () => {
    setIsPopupOpen((prev) => !prev);
  };
  const handleSort = () => {
    setSorted((prev) => !prev);
  };
  const handleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
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
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => useContext(AppStateContext);
