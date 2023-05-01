import { Button as BaseButton } from "antd";
import { type ReactNode } from "react";

type Props = {
  text?: string;
  ariaLabel?: string;
  size?: "small" | "middle" | "large";
  type?: "text" | "link" | "ghost" | "default" | "primary" | "dashed";
  icon?: ReactNode;
  shape?: "default" | "circle" | "round";
  onClick?: () => void;
};

export const Button = ({
  text,
  ariaLabel,
  size,
  type,
  icon,
  shape,
  onClick,
}: Props) => {
  return (
    <BaseButton
      aria-label={ariaLabel}
      size={size}
      type={type}
      icon={icon}
      shape={shape}
      onClick={onClick}
      style={{ width: "100%" }}
    >
      {text}
    </BaseButton>
  );
};
