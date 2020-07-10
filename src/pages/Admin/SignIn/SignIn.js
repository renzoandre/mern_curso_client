import React from 'react';
import { Layout, Tabs } from 'antd';
import { Redirect } from 'react-router-dom';
import Logo from '../../../assets/img/png/logo.png';
import RegisterForm from '../../../components/Admin/RegisterForm/RegisterForm';

import './SignIn.scss';

export default function SignIn() {
    const { Content } = Layout;
    const { TabPane } = Tabs;

    return (
        <Layout className="sign-in">
            <Content className="sign-in_content">
                <h1 className="sign-in_content-logo">
                    <img src={Logo} alt="logo" />
                </h1>
                <div className="sign-in_content-tabs">
                    <Tabs type="card">
                        <TabPane tab={<span>Entrar</span>} key="1">
                            Componente Login
                        </TabPane>
                        <TabPane tab={<span>Nuevo usuario</span>} key="2">
                            <RegisterForm />
                        </TabPane>
                    </Tabs>
                </div>
            </Content>
        </Layout>
    );
}
