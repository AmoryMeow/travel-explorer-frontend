import { useTheme, type Themes } from "./theme";

type Colors = {
  layout: string;
  background: string;
  backgroundSelect: string;
  backgroundHover: string;
  color: string;
  colorMinor: string;
  colorInvert: string;
  control: string;
};

export const palette = {
  white: "#ffffff",
  blue1: "#1a2031",
  blue2: "#1f283e",
  blue3: "#344767",
  blue4: "#1a73e8",
  blue5: "#3871e0",
  grey1: "#4d5363",
  grey2: "#757b88",
  grey4: "#eff1f4",
  grey5: "#f0f2f5",
};

export const useColors = (): Colors => {
  const { theme } = useTheme();

  const colors: { [key in Themes]: Colors } = {
    dark: {
      layout: palette.blue1,
      background: palette.blue2,
      backgroundSelect: palette.grey1,
      backgroundHover: palette.grey2,
      color: palette.white,
      colorMinor: palette.blue3,
      colorInvert: palette.blue3,
      control: palette.blue4,
    },
    light: {
      layout: palette.grey4,
      background: palette.white,
      backgroundSelect: palette.grey5,
      backgroundHover: palette.grey5,
      color: palette.blue3,
      colorMinor: palette.grey5,
      colorInvert: palette.white,
      control: palette.blue5,
    },
  };

  return colors[theme];
};

const hexToRgb = (hex: string) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

export const colorWithOpacity = (color: string, opactity: number) => {
  const rgb = hexToRgb(color);
  if (!rgb) return color;

  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opactity})`;
};
