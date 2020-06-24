import React, { useState, useEffect } from 'react'
import './index.css'
import { Layout, List, Skeleton, Avatar, Button, Typography, Modal, Form, Input } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons';
import axios from 'axios'

export default ({ list, initLoading, loading, updateData, deleteData, fetchData }) => {

    const [modalType, setModalType] = useState(null)
    const [modalVisible, setModalVisible] = useState(false)
    const [inputName, setInputName] = useState('')
    const [inputNumber, setInputNumber] = useState('')
    const [currentItem, setCurrentItem] = useState({})

    const okText =
        modalType === "edit" ? "Сохранить" :
            modalType === "add" ? "Добавить" :
                modalType === "delete" ? "Да" : "OK"
    const cancelText =
        modalType === "edit" ? "Закрыть" :
            modalType === "add" ? "Закрыть" :
                modalType === "delete" ? "Нет" : "Закрыть"

    const { Title } = Typography

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

    const showModal = (item, type) => {
        setModalType(type)
        setCurrentItem(item)
        setInputName(item.name)
        setInputNumber(item.number)
        setModalVisible(true)
    }

    const handleModalOk = (e) => {
        switch (modalType) {
            case "edit":
                updateData(currentItem.id, { name: inputName ? inputName : null, number: inputNumber ? inputNumber : null })
                break
            case "delete":
                deleteData(currentItem.id)
                break

        }
        setModalVisible(false)
    }

    const handleModalCancel = (e) => {

        setModalVisible(false)
    }

    useEffect(() => {
        fetchData()

    }, [])

    return (
        <Layout className="content" style={{ marginTop: "1rem", minHeight: 350 }}>
            <List
                locale={{ emptyText: <Title level={1}><ExclamationCircleOutlined style={{ color: '#ffa53d' }} /> Контактов не найдено</Title> }}
                className="demo-loadmore-list"
                loading={initLoading || loading}
                itemLayout="horizontal"
                dataSource={list}
                renderItem={item => (
                    <List.Item
                        style={{ background: "#fff", padding: "1rem", marginTop: "5px" }}
                        actions={[<Button key="item-edit" onClick={() => showModal(item, "edit")}>Изменить</Button>, <Button danger key="item-danger" onClick={() => showModal(item, "delete")}>Удалить</Button>]}
                    >
                        <Skeleton avatar title={false} loading={item.loading} active>
                            <List.Item.Meta
                                title={<a>{item.name}</a>}
                            />
                            <div>{item.number}</div>
                        </Skeleton>

                    </List.Item>
                )}
            />
            <Modal
                okText={okText}
                cancelText={cancelText}
                title={"Контакт - " + currentItem.name ? currentItem.name : null}
                visible={modalVisible}
                onOk={(e) => handleModalOk(e)}
                onCancel={(e) => handleModalCancel(e)}
            >
                {

                    modalType === "add" ?
                        <Layout className="content site-layout-background" style={{ margin: "0 16px", marginTop: "1rem"}}>
                            <Form
                                size="large"
                            >
                                <Form.Item label="name">
                                    <Input placeholder="Имя контакта" name="name" value={inputName} onChange={(e) => changeHandler(e)} />
                                </Form.Item>
                                <Form.Item label="number">
                                    <Input placeholder="Номер контакта" name="number" value={inputNumber} onChange={(e) => changeHandler(e)} />
                                </Form.Item>
                            </Form>
                        </Layout> :
                        modalType === "edit" ? <Layout className="content site-layout-background" style={{ margin: "0 16px", marginTop: "1rem", minHeight: 350 }}>
                            <Form
                                size="large"
                            >
                                <Form.Item label="Имя контакта">
                                    <Input placeholder="Имя контакта" name="name" value={inputName} onChange={(e) => changeHandler(e)} />
                                </Form.Item>
                                <Form.Item label="Номер контакта">
                                    <Input placeholder="Номер контакта" name="number" value={inputNumber} onChange={(e) => changeHandler(e)} />
                                </Form.Item>
                            </Form>
                        </Layout> :
                            modalType === "delete" ? <Layout className="content site-layout-background" style={{ margin: "0 16px", marginTop: "1rem", minHeight: 350 }}>
                                <Form
                                    size="large"
                                >
                                    <Form.Item>
                                        <p>Вы действительно хотите удалить контакт <strong>{currentItem.name ? currentItem.name : null}</strong>?</p>

                                    </Form.Item>
                                </Form>
                            </Layout> : null
                }
            </Modal>
        </Layout>
    )
}