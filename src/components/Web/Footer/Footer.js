import React from 'react';
import { Layout, Row, Col } from 'antd';
import MyInfo from './MyInfo';
import NagivationFooter from './NavigationFooter';
import Newsletter from '../Newsletter';

import './Footer.scss';

export default function Footer() {
    const { Footer } = Layout;

    return (
        <Footer className="footer">
            <Row>
                <Col md={4} />
                <Col md={16}>
                    <Row>
                        <Col md={8}>
                            <MyInfo />
                        </Col>
                        <Col md={8}>
                            <NagivationFooter />
                        </Col>
                        <Col md={8}>
                            <Newsletter />
                        </Col>
                    </Row>
                </Col>
                <Col md={4} />
            </Row>
            <Row className="footer_copyright">
                <Col md={4} />
                <Col md={16}>
                    <Row>
                        <Col md={12}>Todos los derechos reservados</Col>
                        <Col md={12}>Renzo desarrollador web</Col>
                    </Row>
                </Col>
                <Col md={4} />
            </Row>
        </Footer>
    );
}
