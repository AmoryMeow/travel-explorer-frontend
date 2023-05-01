import { ReactNode, useState } from "react";
import useLocalStorage from "use-local-storage";

import { Space, Avatar } from "antd";
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
  Button,
  Select,
} from "@package/ui";
import { useTranslation, LanguageSwitcher } from "@package/i18n";
import { routes, useNavigate } from "@package/routes";

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
  const navigate = useNavigate();

  const menuOptions: DropdownItem[] = [
    {
      label: t("profile"),
      key: "profile",
      onClick: () => navigate(routes.profile),
    },
    {
      label: t("logOut"),
      key: "logOut",
      onClick: () => navigate(routes.home),
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
      <Button
        shape="circle"
        size="large"
        onClick={() => setIsOpen(true)}
        icon={<SettingOutlined />}
      />

      <SideBar
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={t("title")}
      >
        <Field label={t("language")} place="left">
          <LanguageSwitcher />
        </Field>
        <Field label={t("theme")} place="left">
          <ThemeSwitcher />
        </Field>
        <Field label={t("currancy")} place="left">
          <CurrancySwitcher />
        </Field>
      </SideBar>
    </>
  );
};

const Field = ({
  label,
  place = "top",
  children,
}: {
  label: string;
  place?: "top" | "left";
  children: ReactNode;
}) => {
  return (
    <div
      css={{
        display: "grid",
        gridAutoFlow: place === "top" ? "row" : "column",
        gridTemplateColumns: place === "left" ? "100px 1fr" : undefined,
        alignItems: "center",
        gap: "8px",
        padding: "8px 0px",
        boxSizing: "border-box",
      }}
    >
      <span
        css={{
          fontWeight: "bold",
        }}
      >
        {label}
      </span>
      <div>{children}</div>
    </div>
  );
};

const CurrancySwitcher = () => {
  const options = [
    {
      value: "USD",
      label: "USD",
    },
    {
      value: "EUR",
      label: "EUR",
    },
    {
      value: "RUB",
      label: "RUB",
    },
  ];

  const [currancy, setCurrancy] = useLocalStorage("currancy", "USD");

  return (
    <Select options={options} onChange={setCurrancy} selected={currancy} />
  );
};
