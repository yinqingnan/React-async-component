import React, {FC} from 'react';
import {Form, Input, Button, Checkbox} from 'antd';
import {Rules} from '../../utils/loginForm'
import axios from 'axios'
import {Antdsuccess,Antderror} from '../../utils/Message'
import {createBrowserHistory} from 'history'

const LoginForm: FC = (props) => {
    const history = createBrowserHistory()
    const layout = {
        labelCol: {span: 6},
        wrapperCol: {span: 14},
    };
    const tailLayout = {
        wrapperCol: {offset: 6, span: 16},
    };
    const btnLatout = {
        wrapperCol: {offset: 6, span: 14}
    }
    const onFinish = (values: any) => {
        console.log(values)
        axios
            .post("/userLogin/login", {
                username: values.email,
                password: values.password,
            })
            .then((res) => {
                if (res.data === "登录成功") {
                    Antdsuccess("登录成功", 2);
                    window.location.href = '/home/ctest3'
                } else if (res.data === "用户不存在") {
                    Antderror(res.data, 1);
                } else if (res.data === "密码错误") {
                    Antderror(res.data, 1);
                }
            });

    };

    const btnstyle = {
        width: '100%'
    }
    return (
        <div className="loginForm">
            <Form
                {...layout}
                autoComplete="off"
                name="basic"
                onFinish={onFinish}
                initialValues={{
                    email:'754417575@qq.com',
                    password:'123456',
                    remember: true
                }}
            >
                <Form.Item
                    label="邮箱"
                    name="email"
                    rules={[{
                        type: 'email',
                        required: true,
                        message: '邮箱格式不正确'
                    }, ...Rules.email]}
                >
                    <Input allowClear placeholder='请输入邮箱账户'/>
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={Rules.password}
                >
                    <Input.Password placeholder='请输入密码' allowClear/>
                </Form.Item>
                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>记住密码</Checkbox>
                </Form.Item>
                <Form.Item {...btnLatout}>
                    <Button type="primary" htmlType="submit" style={btnstyle}>
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
export default LoginForm