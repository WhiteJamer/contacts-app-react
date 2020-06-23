import React from 'react'
import { Layout, Row, Col } from 'antd'
import LoginForm from '../components/LoginForm';
import Header from '../components/Header';

const { Footer } = Layout;

export default () =>
    (
        <>
            <Header />
            <Layout style={{ minHeight: "100vh" }}>
                <Row justify="center">
                    <Col span={12}>
                        <LoginForm />
                    </Col>
                </Row>
            </Layout>

        </>
    )
