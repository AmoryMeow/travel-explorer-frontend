import { type ReactNode } from "react";
import { Dropdown as BaseDropdown } from "antd";

export type DropdownItem = {
  key: string;
  label?: string;
  onClick?: () => void;
  icon?: ReactNode;
  disabled?: boolean;
  danger?: boolean;
};

type Props = { options: DropdownItem[]; trigger: ReactNode };

export const Dropdown = ({ options, trigger }: Props) => {
  return <BaseDropdown menu={{ items: options }}>{trigger}</BaseDropdown>;
};
