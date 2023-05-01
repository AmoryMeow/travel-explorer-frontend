import { createContext, useContext, useState, type ReactNode } from "react";

import { RadioButton, icons } from "@package/ui";
import { useTranslation } from "@package/i18n";

export const themes = ["light", "dark"] as const;

export type Themes = typeof themes[number];

export type Theme = {
  theme: Themes;
  changeTheme: (theme: Themes) => void;
};

const ThemeContext = createContext<Theme>({
  theme: "light",
  changeTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const savedTheme = window.localStorage.getItem("theme") as Themes;

  const currentTheme = themes.includes(savedTheme)
    ? savedTheme
    : defaultDark
    ? "dark"
    : "light";

  const [theme, setTheme] = useState<Themes>(currentTheme);
  const changeTheme = (theme: Themes) => {
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
  const { t } = useTranslation("theme");

  const options = [
    { label: t("light"), icon: <icons.Sun />, value: "light" },
    { label: t("dark"), icon: <icons.Moon />, value: "dark" },
  ];

  return (
    <RadioButton
      options={options}
      type="button"
      buttonType="solid"
      value={theme}
      onChange={() => changeTheme(theme === "light" ? "dark" : "light")}
    />
  );
};
