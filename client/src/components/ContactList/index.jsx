import React, { useState, useEffect } from 'react'
import './index.css'
import { Layout, List, Skeleton, Avatar, Button, Typography } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons';
import axios from 'axios'

export default () => {
    const { Title } = Typography
    const baseUrl = "http://localhost:3666"
    const [initLoading, setInitLoading] = useState(true)
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [list, setList] = useState([])

    useEffect(() => {
        async function fetchData() {
            setInitLoading(false)
            try {
                const res = await axios.get(`${baseUrl}${'/contacts'}`)
                setLoading(true)
                setLoading(false)
                setData(res.data)
                setList(res.data)
                console.log(res.data)
            } catch {
                setLoading(false)
            }
        }
        fetchData()

    }, [])
    return (
        <Layout className="content site-layout-background" style={{ margin: "0 16px", marginTop: "1rem", minHeight: 350 }}>
            <List
                style={{padding: "10px"}}
                locale={{ emptyText: <Title level={1}><ExclamationCircleOutlined style={{ color: '#ffa53d' }} /> Контактов не найдено</Title> }}
                className="demo-loadmore-list"
                loading={initLoading || loading}
                itemLayout="horizontal"
                dataSource={list}
                renderItem={item => (
                    <List.Item
                        actions={[<Button key="item-edit">Изменить</Button>, <Button danger key="item-danger">Удалить</Button>]}
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
        </Layout>
    )
}