import React from 'react'
import { Layout, Row, Col } from 'antd'
import Header from '../components/Header'
import ContactList from '../components/ContactList'

export default () =>
    (
        <>
            <Header />
            <Layout style={{ minHeight: "100vh" }}>
                <Row justify="center">
                    <Col span={12}>
                        {/* <ContactAddForm /> */}
                        <ContactList />
                    </Col>
                </Row>
            </Layout>
        </>
    )
