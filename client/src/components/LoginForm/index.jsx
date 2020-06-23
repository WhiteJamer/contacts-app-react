import React from 'react'
import './index.css'
import { Layout, Input, Button, Form } from 'antd'

const layout = {
    labelCol: {
        span: 8
    },
    wrapperCol: {
        span: 16
    }
}

const tailLayout = {
    offset: 8,
    span: 16
}

const onFinish = values => {
    console.log(values)
}

const onFinishFailed = errorMessage => {
    console.log(errorMessage)
}

export default () =>
    (
        <Layout className="content site-layout-background" style={{ margin: "0 16px", marginTop: "1rem" }}>
            <Form
                style={{ padding: "15px" }}
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    labelAlign="left"
                    label="Имя пользователя"
                    name="username"
                    rules={[{ required: true, message: 'Пожалуйста введите имя пользователя!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    labelAlign="left"
                    label="Пароль"
                    name="password"
                    rules={[{ required: true, message: 'Пожалуйста введите пароль!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Войти
                    </Button>
                </Form.Item>
            </Form>
        </Layout>
    )