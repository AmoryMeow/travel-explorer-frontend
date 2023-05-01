import { Radio, type RadioChangeEvent } from "antd";
import { ReactNode } from "react";

type ButtonItem = {
  label: string;
  value: string;
  icon?: ReactNode;
  disabled?: boolean;
  title?: string;
};

type Props = {
  value: string;
  options: ButtonItem[];
  type?: "default" | "button";
  buttonType?: "outline" | "solid";
  onChange?: (value: string) => void;
};

export const RadioButton = ({
  value,
  options,
  type,
  buttonType,
  onChange,
}: Props) => {
  const handleOnChange = ({ target: { value } }: RadioChangeEvent) => {
    onChange?.(value);
  };

  return (
    <Radio.Group
      onChange={handleOnChange}
      value={value}
      optionType={type}
      buttonStyle={buttonType}
    >
      {options.map((item) => (
        <Radio value={item.value} key={item.value}>
          <div
            css={{
              display: "flex",
              gap: "4px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {item.icon && item.icon}
            <span>{item.label}</span>
          </div>
        </Radio>
      ))}
    </Radio.Group>
  );
};
