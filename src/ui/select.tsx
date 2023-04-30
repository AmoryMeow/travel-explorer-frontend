import { ReactNode } from "react";

import { Select as BaseSelect } from "antd";

type SelectItem = {
  value: string;
  label: string;
  disabled?: boolean;
};

type Props = {
  size?: "small" | "middle" | "large";
  selected?: string;
  options: SelectItem[];
  clearable?: boolean;
  selectedIcon?: ReactNode;
  placeholder?: ReactNode;
  onChange?: (value: string) => void;
};

export const Select = ({
  size,
  selected,
  options,
  clearable,
  placeholder,
  selectedIcon,
  onChange,
}: Props) => {
  const value = options.find((item) => item.value === selected);

  const handleOnChange = (item: SelectItem) => {
    onChange?.(item.value);
  };

  return (
    <BaseSelect
      onChange={handleOnChange}
      options={options}
      value={value}
      allowClear={clearable}
      menuItemSelectedIcon={selectedIcon}
      placeholder={placeholder}
      size={size}
      labelInValue
      style={{
        width: "100%",
        maxWidth: "320px",
      }}
    />
  );
};
