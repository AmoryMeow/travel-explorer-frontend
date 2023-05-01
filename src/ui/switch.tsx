import { Switch as BaseSwitch } from "antd";

type Props = {
  size?: "default" | "small";
  checked?: boolean;
  checkedLabel?: string;
  unCheckedLabel?: string;
  loading?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
};

export const Switch = ({
  size,
  checked,
  checkedLabel,
  unCheckedLabel,
  loading,
  disabled,
  onChange,
}: Props) => {
  return (
    <BaseSwitch
      size={size}
      checked={checked}
      onChange={onChange}
      checkedChildren={checkedLabel}
      unCheckedChildren={unCheckedLabel}
      loading={loading}
      disabled={disabled}
    />
  );
};
