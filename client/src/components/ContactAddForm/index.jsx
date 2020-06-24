import React, { useState } from 'react'
import { Layout, Input, Button, Form } from 'antd'
import axios from 'axios'
import { baseUrl } from '../../config'

export default ({addContact, fetchData}) => {
    const [inputName, setInputName] = useState('')
    const [inputNumber, setInputNumber] = useState('')

    const changeHandler = e => {
        switch (e.target.name) {
            case "name":
                setInputName(e.target.value)
                break
            case "number":
                setInputNumber(e.target.value)
                break

        }
    }

    const addHandler = () => {
        addContact({ name: inputName, number: inputNumber })
    }

    return (
        <Layout className="content site-layout-background" style={{ padding: "1rem", marginTop: "1rem" }}>
            <Form
                layout="inline"
                size="large"
            >
                <Form.Item name="name" rules={[{ required: true, message: 'Имя контакта не должно быть пустым!' }]}>
                    <Input name="name" placeholder="Имя контакта" value={inputName} onChange={(e) => changeHandler(e)} />
                </Form.Item>
                <Form.Item name="number" rules={[{ required: true, message: 'Номер контакта не должен быть пустым!' }]}>
                    <Input name="number" placeholder="Номер контакта" value={inputNumber} onChange={(e) => changeHandler(e)} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" onClick={() => addHandler()} >Добавить</Button>
                </Form.Item>
            </Form>
        </Layout>
    )
}