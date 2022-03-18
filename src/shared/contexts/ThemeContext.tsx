import { createContext, useCallback, useMemo, useState } from "react";
import { Box, ThemeProvider } from "@mui/material";

import { LightTheme, DarkTheme } from "./../themes";

interface ThemeContextData {
  themeName: "light" | "dark";
  toggleTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextData);

export const AppThemeProvider: React.FC = ({ children }) => {
  const [themeName, setThemeName] = useState<"light" | "dark">("light");

  const toggleTheme = useCallback(() => {
    setThemeName((oldThemeName) =>
      oldThemeName === "light" ? "dark" : "light"
    );
  }, []);

  const theme = useMemo(() => {
    if (themeName === "light") return LightTheme;

    return DarkTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box
          width="100vw"
          height="100vh"
          bgcolor={theme.palette.background.default}
        >
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
