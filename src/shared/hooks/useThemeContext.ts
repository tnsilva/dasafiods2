import { useContext } from "react";
import { ThemeContext } from "../contexts";

export const useThemeContext = () => {
    return useContext(ThemeContext);
  };