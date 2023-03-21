import './index.css';
import { useState } from'react';
import { Button, Input, Form, Dialog} from 'antd-mobile'

const Login = () => {
    const [form] = Form.useForm() // hooks获取当前表单
    const onSubmit = () => {
        const values = form.getFieldsValue()
        Dialog.alert({
            content: <pre>{JSON.stringify(values, null, 2)}</pre>,
        })
    }

    return (
        <div className="login">
            <Form form = {form} layout='horizontal' mode='card'
                footer={
                    <Button color="primary" onClick={onSubmit}>log in</Button>
                }
            >
                <Form.Item label='username' name='username'>
                    <Input placeholder='please enter username' clearable />
                </Form.Item>
                <Form.Item label='password' name='password'>
                    <Input placeholder='please enter password' clearable type='password'/>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Login;
