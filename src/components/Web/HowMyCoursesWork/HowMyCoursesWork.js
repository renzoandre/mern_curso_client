import React from 'react';
import { Row, Col, Card } from 'antd';
import {
    ClockCircleOutlined,
    KeyOutlined,
    MessageOutlined,
    UserOutlined,
    DollarCircleOutlined,
    CheckCircleOutlined,
} from '@ant-design/icons';

import './HowMyCoursesWork.scss';

export default function HowMyCoursesWork() {
    return (
        <Row className="how-my-courses-work">
            <Col lg={24} className="how-my-courses-work_title">
                <h2>¿Como fucniona mis cursos?</h2>
                <h3>
                    Cada curso cuenta con contenido bajo la web de Udemy, activa las 24 horas al día los 365 días del
                    año
                </h3>
            </Col>
            <Col lg={4} />
            <Col lg={16}>
                <Row className="row-cards">
                    <Col md={8}>
                        <CardInfo
                            icon={<ClockCircleOutlined className="how-my-courses-work_icon" />}
                            title="Cursos y clases"
                            description="Cursos de entre 10 y 30 horas y cada clase del curso con dureción máxima de 15 minutos, faciles de llevar en tu día a día de aprendizaje"
                        />
                    </Col>
                    <Col md={8}>
                        <CardInfo
                            icon={<KeyOutlined className="how-my-courses-work_icon" />}
                            title="Acceso 24/7"
                            description="Cursos de entre 10 y 30 horas y cada clase del curso con dureción máxima de 15 minutos, faciles de llevar en tu día a día de aprendizaje"
                        />
                    </Col>
                    <Col md={8}>
                        <CardInfo
                            icon={<MessageOutlined className="how-my-courses-work_icon" />}
                            title="Aprendizaje colaborativo"
                            description="Cursos de entre 10 y 30 horas y cada clase del curso con dureción máxima de 15 minutos, faciles de llevar en tu día a día de aprendizaje"
                        />
                    </Col>
                </Row>
                <Row className="row-cards">
                    <Col md={8}>
                        <CardInfo
                            icon={<UserOutlined className="how-my-courses-work_icon" />}
                            title="Mejora tu perfil"
                            description="Cursos de entre 10 y 30 horas y cada clase del curso con dureción máxima de 15 minutos, faciles de llevar en tu día a día de aprendizaje"
                        />
                    </Col>
                    <Col md={8}>
                        <CardInfo
                            icon={<DollarCircleOutlined className="how-my-courses-work_icon" />}
                            title="Precios bajos"
                            description="Cursos de entre 10 y 30 horas y cada clase del curso con dureción máxima de 15 minutos, faciles de llevar en tu día a día de aprendizaje"
                        />
                    </Col>
                    <Col md={8}>
                        <CardInfo
                            icon={<CheckCircleOutlined className="how-my-courses-work_icon" />}
                            title="Certificador de finalización"
                            description="Cursos de entre 10 y 30 horas y cada clase del curso con dureción máxima de 15 minutos, faciles de llevar en tu día a día de aprendizaje"
                        />
                    </Col>
                </Row>
            </Col>
            <Col lg={4} />
        </Row>
    );
}

function CardInfo(props) {
    const { icon, title, description } = props;
    const { Meta } = Card;

    return (
        <Card className="how-my-courses-work_card">
            {icon}
            <Meta title={title} description={description} />
        </Card>
    );
}
