import { createContext, useContext, useState, type ReactNode } from "react";
import Button from "@mui/material/Button";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness3Icon from "@mui/icons-material/Brightness3";

export type Theme = {
  theme: string;
  changeTheme: (theme: string) => void;
};

export const themes: string[] = ["light", "dark"];

const ThemeContext = createContext<Theme>({
  theme: "light",
  changeTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const savedTheme = window.localStorage.getItem("theme") ?? "";

  const currentTheme = themes.includes(savedTheme)
    ? savedTheme
    : defaultDark
    ? "dark"
    : "light";

  const [theme, setTheme] = useState(currentTheme);
  const changeTheme = (theme: string) => {
    setTheme(theme);
    window.localStorage.setItem("theme", theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export const ThemeSwitcher = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <Button
      variant="outlined"
      onClick={() => changeTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? <Brightness7Icon /> : <Brightness3Icon />}
    </Button>
  );
};