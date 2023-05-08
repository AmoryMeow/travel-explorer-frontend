import { css, type CSSInterpolation } from "@emotion/css";

export const getClassName = (style: CSSInterpolation) => {
  return css(style);
};
