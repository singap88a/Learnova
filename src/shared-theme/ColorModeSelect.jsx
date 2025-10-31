import * as React from "react";
import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

export default function ColorModeSelect({ sx }) {
  const [mode, setMode] = React.useState("light");

  const toggleMode = () => setMode(mode === "light" ? "dark" : "light");

  return (
    <IconButton sx={sx} onClick={toggleMode} color="inherit">
      {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
}
