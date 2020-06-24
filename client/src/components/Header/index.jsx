import React from 'react'
import './index.css'
import { Layout, Menu } from 'antd'
import { useHistory } from 'react-router-dom'

const { Header } = Layout

const isAuth = localStorage.getItem('isAuth')

export default () => {
    const history = useHistory();

    const logoutHadler = () => {
        localStorage.removeItem("isAuth")
        return history.push('/login')
    }

    return (
        <>
            {isAuth ?
                <Header>
                    <div className="logo" />
                    <Menu theme="dark" selectedKeys={["contacts"]} mode="horizontal">
                        <Menu.Item key="contacts" >Контакты</Menu.Item>
                        <Menu.Item key="logout" onClick={() => logoutHadler()}>Выйти</Menu.Item>
                    </Menu>
                </Header>
                : null}
        </>
    )
}