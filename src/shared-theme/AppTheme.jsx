import * as React from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

export default function AppTheme({ children }) {
  const [mode] = React.useState("light");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: "#1976d2" },
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
