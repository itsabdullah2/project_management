import { useEffect, useState } from "react";
import {
  useAppState,
  AppNavbar,
  FilterItems,
  TasksHolder,
  AddTaskPopup,
} from "../../";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const Board = () => {
  const [value, setValue] = useState(0);
  const { isSidebarOpen, isPopupOpen, setIsTopicOpen } = useAppState();

  return (
    <div
      className={`h-screen bg-veryDarkGray px-6 relative ${
        isSidebarOpen ? "col-span-10" : "col-span-11"
      }`}
    >
      <AppNavbar />
      <FilterItems setState={setIsTopicOpen} />
      <div className={`grid grid-cols-10 gap-2 mt-5`}></div>
      {isPopupOpen && <AddTaskPopup />}
      <div className="flex items-start gap-4">
        <div className="flex-1 flex items-start flex-wrap gap-2">
          <TasksHolder />
        </div>
        <div className="bg-darkGray p-4 rounded-2xl flex items-center justify-center w-[350px]">
          <Box
            sx={{
              width: "200px",
              height: "200px",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CircularProgress
              value={value + 1}
              variant="determinate"
              style={{
                width: "100px",
                height: "100px",
              }}
              sx={{
                color: "#4f46e5",
              }}
            />
            <Typography
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                translate: "-50% -50%",
                color: "#FBFBFB",
                fontSize: "20px",
              }}
            >
              {value}%
            </Typography>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Board;
