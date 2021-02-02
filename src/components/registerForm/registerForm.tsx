import React, {FC} from 'react'
import {
    Form,
    Input,
    Tooltip,
    Select,
    Checkbox,
    Button,
} from 'antd';
import {QuestionCircleOutlined} from '@ant-design/icons';

const RegisterForm: FC = () => {
    const {Option} = Select;
    const tailFormItemLayout = {
        wrapperCol: {
            sm: {
                span: 16,
                offset: 6,
            },
        },
    };
    const [form] = Form.useForm();
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{width: 70}} >
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );
    const formItemLayout = {
        labelCol: {
            xs: {span: 16},
            sm: {span: 6},
        },
        wrapperCol: {
            xs: {span: 16},
            sm: {span: 16},
        },
    };
    return (
        <div>
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                autoComplete={'off'}
                initialValues={{
                    prefix: '86',
                }}
            >
                <Form.Item
                    name="email"
                    label="E-mail账户"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    name="password"
                    label="密码"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="确认密码"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({getFieldValue}) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('两次输入密码不一致');
                            },
                        }),
                    ]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item
                    name="nickname"
                    label={
                        <span>
                            昵称&nbsp;
                            <Tooltip title="What do you want others to call you?">
                              <QuestionCircleOutlined/>
                            </Tooltip>
                        </span>
                    }
                    rules={[{required: true, message: 'Please input your nickname!', whitespace: true}]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    name="phone"
                    label="联系电话"
                    rules={[{required: true, message: 'Please input your phone number!'}]}
                >
                    <Input addonBefore={prefixSelector} style={{width: '100%'}}/>
                </Form.Item>
                <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                        {
                            validator: (_, value) =>
                                value ? Promise.resolve() : Promise.reject('阅读协议为必填项'),
                        },
                    ]}
                    {...tailFormItemLayout}
                >
                    <Checkbox>
                        I have read the <span>agreement</span>
                    </Checkbox>
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" style={{width: '100%'}}>
                        注册
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
export default RegisterForm