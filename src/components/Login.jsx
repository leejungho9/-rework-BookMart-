import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from "./Login.module.css";

export default function Login () {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      name="normal_login"
      className={styles.login_form}
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
        <div className={styles.signin_title}>BOOK MART</div>

      <Form.Item
        name="username"
        rules={[{ required: true, message: '아이디를 입력해주세요!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true,message: '비밀번호를 입력해주세요!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className={styles.login_form_button}>
          LOG IN
        </Button>
        <Button type="secondary" htmlType="submit" className={styles.singup_form_button}>
         <a href="/signup">SING UP</a>
         </Button>
      </Form.Item>
    </Form>
  );
};

