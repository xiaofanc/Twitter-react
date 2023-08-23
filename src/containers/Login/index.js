import './index.css';

import {
  Button, Input, Form, Dialog,
} from 'antd-mobile';
import { loginService } from '../../services/login';

function Login() {
  const [form] = Form.useForm(); // hooks获取当前表单
  const onSubmit = async () => {
    const values = form.getFieldsValue();
    const res = await loginService(values.username, values.password);
    if (res && res.length > 0) {
      Dialog.alert({
        content: 'success',
      });
      return;
    }
    Dialog.alert({
      content: 'error',
    });
  };

  return (
    <div className="login">
      <Form
        form={form}
        layout="horizontal"
        mode="card"
        footer={
          <Button color="primary" onClick={onSubmit}>log in</Button>
                }
      >
        <Form.Item label="username" name="username">
          <Input placeholder="please enter username" clearable />
        </Form.Item>
        <Form.Item label="password" name="password">
          <Input placeholder="please enter password" clearable type="password" />
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
