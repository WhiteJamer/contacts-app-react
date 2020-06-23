import React, { useState } from 'react'
import { Layout, Input, Button, Form } from 'antd'

export default () => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const changeHandler = e => {
        switch (e.target.name) {
            case "name":
                setName(e.target.value)
            case "number":
                setNumber(e.target.value)

        }

    }
    return (
        <Layout className="content site-layout-background" style={{ margin: "0 16px", marginTop: "1rem", minHeight: 350 }}>
            <Form
                size="large"
            >
                <Form.Item label="name">
                    <Input placeholder="Имя контакта" name="name" value={name} onChange={(e) => changeHandler(e)} />
                </Form.Item>
                <Form.Item label="number">
                    <Input placeholder="Номер контакта" name="number" value={number} onChange={(e) => changeHandler(e)} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary">Добавить</Button>
                </Form.Item>
            </Form>
        </Layout>
    )
}