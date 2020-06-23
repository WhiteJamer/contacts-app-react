import React from 'react'
import './index.css'
import { Layout, Menu } from 'antd'

const { Header } = Layout

const isAuth = localStorage.getItem('isAuth') && localStorage.getItem('isAuth') | false

export default () =>
    (
        <>
            {isAuth ?
                <Header>
                    <div className="logo" />
                    <Menu theme="dark" selectedKeys={["contacts"]} mode="horizontal">
                        <Menu.Item key="contacts" >Контакты</Menu.Item>
                        <Menu.Item key="logout" >Выйти</Menu.Item>
                    </Menu>
                </Header>
            : null}
        </>
    )