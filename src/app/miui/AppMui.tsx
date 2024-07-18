'use client';

import React, { useMemo, useState } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { getDesignTokens } from "./theme";
import { createTheme, CssBaseline, PaletteMode } from "@mui/material";

interface AppMuiProps {
    children: React.ReactNode;
    changeMode?: () => void;
    }
const AppMui = ({ children }: Readonly<AppMuiProps>) => {
  const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
  const [mode, setMode] = useState<PaletteMode>("light");

  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);


  return (
    <AppRouterCacheProvider>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ColorModeContext.Provider>
    </AppRouterCacheProvider>
  );
};

export default AppMui;
