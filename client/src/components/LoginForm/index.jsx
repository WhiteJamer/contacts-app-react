import React from 'react'
import './index.css'
import { Layout, Input, Button, Form } from 'antd'
import axios from 'axios'
import { useState } from 'react'
import { baseUrl } from '../../config'

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

export default () => {
    const [usernameInput, setUsernameInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')

    const loginHandler = async () => {
        const res = await axios.get(`${baseUrl}/users?username=${usernameInput}&password=${passwordInput}`)
        console.log(res.data);
        
        if (res.data.length > 0){
            localStorage.setItem("isAuth", true)
        }
        else return
    }

    const changeHandler = (e) => {
        switch (e.target.name) {
            case "username":
                setUsernameInput(e.target.value)
                break
            case "password":
                setPasswordInput(e.target.value)
                break
        }
    }

    return (
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
                    <Input value={usernameInput} name="username" onChange={(e) => changeHandler(e)} />
                </Form.Item>

                <Form.Item
                    labelAlign="left"
                    label="Пароль"
                    name="password"
                    rules={[{ required: true, message: 'Пожалуйста введите пароль!' }]}
                >
                    <Input.Password value={passwordInput} name="password" onChange={(e) => changeHandler(e)} />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" onClick={() => loginHandler()}>
                        Войти
                    </Button>
                </Form.Item>
            </Form>
        </Layout>
    )
}