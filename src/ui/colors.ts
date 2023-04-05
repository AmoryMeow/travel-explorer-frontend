import { useTheme } from "./theme";

type Colors = {
  background: string;
  color: string;
};

export const useColors = (): Colors => {
  const { theme } = useTheme();

  const colors: { [key: string]: Colors } = {
    dark: {
      background: "#242424",
      color: "rgba(255, 255, 255, 0.87)",
    },
    light: {
      background: " #f9f9f9",
      color: "#213547",
    },
  };

  return colors[theme];
};
