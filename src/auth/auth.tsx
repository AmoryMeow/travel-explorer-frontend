import type { ReactNode } from "react";
import { Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

import { getClassName, Button, useColors } from "@package/ui";
import { useNavigate, routes } from "@package/routes";
import { useTranslation } from "@package/i18n";

type LoginProps = {
  onLogin?: () => void;
};

type Props =
  | ({
      type: "login";
    } & LoginProps)
  | {
      type: "signup";
    };

const Auth = ({ type, ...props }: Props) => {
  if (type === "login") return <Login {...props} />;
  if (type === "signup") return <Signup />;

  return null;
};

const Signup = () => {
  const { t } = useTranslation("auth");

  const onFinish = (values: any) => {
    console.log("onFinish", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <AuthForm
      title={t("register_title")}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label={t("username")}
        name="username"
        rules={[{ required: true, message: t("username_required") }]}
      >
        <Input prefix={<UserOutlined />} placeholder={t("username")} />
      </Form.Item>
      <Form.Item
        label={t("password")}
        name="password"
        rules={[{ required: true, message: t("password_required") }]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder={t("password")}
        />
      </Form.Item>

      <Form.Item
        label={t("confirm_password")}
        name="confirm_password"
        dependencies={["password"]}
        rules={[
          { required: true, message: t("password_required") },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error(t("confirm_password_error")));
            },
          }),
        ]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder={t("confirm_password")}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" text={t("register")} htmlType="submit" />
      </Form.Item>
      <div
        css={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <a href={routes.login}>{t("login")}</a>
      </div>
    </AuthForm>
  );
};

const Login = (props: LoginProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation("auth");

  const onFinish = (values: any) => {
    localStorage.setItem("token", values.username);
    props.onLogin?.();
    navigate(routes.home);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <AuthForm
      title={t("login_title")}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label={t("username")}
        name="username"
        rules={[{ required: true, message: t("username_required") }]}
      >
        <Input prefix={<UserOutlined />} placeholder={t("username")} />
      </Form.Item>
      <Form.Item
        label={t("password")}
        name="password"
        rules={[{ required: true, message: t("password_required") }]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder={t("password")}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" text={t("login")} htmlType="submit" />
      </Form.Item>
      <div
        css={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <a href="">{t("forgot_password")}</a>

        <a href={routes.signup}>{t("register")}</a>
      </div>
    </AuthForm>
  );
};

const AuthForm = ({
  title,
  onFinish,
  onFinishFailed,
  children,
}: {
  title: string;
  onFinish?: (values: any) => void;
  onFinishFailed?: (errorInfo: any) => void;
  children: ReactNode;
}) => {
  const colors = useColors();
  return (
    <div
      css={{ display: "flex", flexDirection: "column", color: colors.color }}
    >
      <h2
        css={{
          fontSize: "21px",
          fontWeight: 700,
          margin: "16px",
          alignSelf: "center",
        }}
      >
        {title}
      </h2>
      <div
        css={{
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <Form
          name="normal_login"
          className={getClassName({
            maxWidth: "600px",
            minWidth: "300px",
          })}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          css={{
            maxWidth: "300px",
          }}
          labelCol={{ flex: 10 }}
          wrapperCol={{ flex: "auto" }}
          labelAlign="left"
        >
          {children}
        </Form>
      </div>
    </div>
  );
};

export default Auth;
