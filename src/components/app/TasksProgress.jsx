import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const TasksProgress = () => {
  const [value, setValue] = useState(0);
  return (
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
  );
};

export default TasksProgress;
