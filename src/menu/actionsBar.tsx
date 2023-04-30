import { ReactNode, useState } from "react";

import { Button, Space, Avatar } from "antd";
import {
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

import {
  SideBar,
  useColors,
  ThemeSwitcher,
  Dropdown,
  type DropdownItem,
} from "@package/ui";
import { useTranslation, LanguageSwitcher } from "@package/i18n";

export const Actions = () => {
  return (
    <ul
      css={{
        margin: 0,
        padding: 0,
        display: "flex",
      }}
    >
      <Space>
        <Item>
          <UserAction />
        </Item>
        <Item>
          <SettingAction />
        </Item>
      </Space>
    </ul>
  );
};

const Item = ({ children }: { children: ReactNode }) => {
  return (
    <li
      css={{
        display: "flex",
        alignItems: "center",
        listStyle: "none",
      }}
    >
      {children}
    </li>
  );
};

const UserAction = () => {
  const colors = useColors();
  const { t } = useTranslation("userAction");

  const menuOptions: DropdownItem[] = [
    {
      label: t("profile"),
      key: "profile",
      onClick: () => console.log("profile"),
    },
    {
      label: t("logOut"),
      key: "logOut",
      onClick: () => console.log("logOut"),
      icon: <LogoutOutlined />,
    },
  ];

  return (
    <Dropdown
      options={menuOptions}
      trigger={
        <Avatar
          style={{
            backgroundColor: colors.control,
            verticalAlign: "middle",
            color: colors.colorInvert,
          }}
          size="large"
          gap={2}
        >
          <UserOutlined />
        </Avatar>
      }
    />
  );
};

const SettingAction = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { t } = useTranslation("settingActions");

  return (
    <>
      <Button shape="circle" size="large" onClick={() => setIsOpen(true)}>
        <SettingOutlined />
      </Button>

      <SideBar
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={t("title")}
      >
        <LanguageSwitcher />
        <ThemeSwitcher />
      </SideBar>
    </>
  );
};
