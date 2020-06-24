import React, { useState } from 'react'
import { Layout, Row, Col } from 'antd'
import Header from '../components/Header'
import ContactList from '../components/ContactList'
import ContactAddForm from '../components/ContactAddForm'
import { baseUrl } from '../config'
import axios from 'axios'

export default () => {
    const [initLoading, setInitLoading] = useState(true)
    const [loading, setLoading] = useState(true)
    const [list, setList] = useState([])

    const validateForm = (name, number) => {
        console.log('name', name)
        return name.length > 0 && number.length > 0
    }

    const fetchData = async () => {
        setInitLoading(false)
        try {
            const res = await axios.get(`${baseUrl}${'/contacts'}`)
            setLoading(true)
            setLoading(false)
            setList(res.data)
        } catch {
            setLoading(false)
        }
    }

    const deleteData = async (id) => {
        await axios.delete(`${baseUrl}/contacts/${id}`)
        fetchData()
    }

    const updateData = async (id, { name, number }) => {
        await validateForm(name, number)
        await axios.patch(`${baseUrl}/contacts/${id}`, { name, number })
        fetchData()
    }

    const addContact = async ({ name, number }) => {
        try {
            const validated = await validateForm(name, number)
            console.log(validated);

            const data = { name, number }
            validated && await axios.post(`${baseUrl}/contacts`, data, { headers: { ContentType: "application/json" } })
        } catch{
            return
        }
        fetchData()

    }


    return (
        <>
            <Header />
            <Layout style={{ minHeight: "100vh" }}>
                <Row justify="center">
                    <Col span={12}>
                        <ContactAddForm fetchData={fetchData} addContact={addContact} />
                        <ContactList list={list} loading={loading} initLoading={initLoading} fetchData={fetchData} addContact={addContact} updateData={updateData} deleteData={deleteData} />
                    </Col>
                </Row>
            </Layout>
        </>
    )
}