import { ReactNode } from "react";
import { Drawer } from "antd";

import { useColors } from "@package/ui";

export const SideBar = ({
  title,
  isOpen,
  onClose,
  children,
}: {
  title: string;
  isOpen?: boolean;
  onClose?: () => void;
  children?: ReactNode;
}) => {
  const colors = useColors();

  return (
    <Drawer
      bodyStyle={{
        backgroundColor: colors.background,
        color: colors.color,
      }}
      placement="right"
      onClose={onClose}
      open={isOpen}
      closable={false}
    >
      <h2>{title}</h2>
      {children}
    </Drawer>
  );
};
