import { Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { getClassName, Button } from "@package/ui";
import { useNavigate, routes } from "@package/routes";
import { useTranslation } from "@package/i18n";

const Login = ({ onLogin }: { onLogin?: () => void }) => {
  const navigate = useNavigate();
  const { t } = useTranslation("login");

  const onFinish = (values: any) => {
    localStorage.setItem("token", values.username);
    onLogin?.();
    navigate(routes.home);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
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

          <a href="">{t("register")}</a>
        </div>
      </Form>
    </div>
  );
};

export default Login;
