import { Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { getClassName, Button } from "@package/ui";
import { useNavigate, routes } from "@package/routes";

const Login = ({ onLogin }: { onLogin?: () => void }) => {
  const navigate = useNavigate();

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
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" text="Log in" htmlType="submit" />
        </Form.Item>
        <div
          css={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <a href="">Forgot password</a>

          <a href="">Register</a>
        </div>
      </Form>
    </div>
  );
};

export default Login;
