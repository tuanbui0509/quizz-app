import { Button, Checkbox, Form, Input } from 'antd';
import { useAppDispatch } from 'app/hooks';
import { LOGIN_SUCCESS } from 'constants/Messages';
import { notificationSuccess } from 'helper/Notification';
import useLoading from 'hooks/useLoading';
import { useNavigate } from 'react-router-dom';
import { login } from './loginSlice';
export default function Login() {
  const nav = useNavigate();
  const dispatch = useAppDispatch();
  // const [Loading, Hidden, Display] = useLoading();

  const onFinish = (values: any) => {
    // Display();
    localStorage.setItem('token', JSON.stringify(values));
    notificationSuccess(LOGIN_SUCCESS, 1000);
    setTimeout(() => {
      dispatch(login());
      nav(`/home`);
    }, 2000);
    // Hidden();
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="login-page">
      <div className="login-box">
        <div className="illustration-wrapper">
          <img
            src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700"
            alt="Login"
          />
        </div>
        <Form
          name="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <p className="form-title">Welcome back</p>
          <p>Login to the Dashboard</p>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              LOGIN
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
