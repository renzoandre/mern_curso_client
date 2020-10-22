import React from 'react';
import { Row, Col, Card, Avatar } from 'antd';
import AvatarPersona from '../../../assets/img/jpg/dog.png';

import './ReviewCourses.scss';

export default function ReviewCourses() {
    return (
        <Row className="review-courses">
            <Row style={{ width: '100%' }}>
                <Col lg={4} />
                <Col lg={16} className="review-courses_title">
                    <h2>Forma parte de los 35 mil estudiantes que estan aprendiendo con mis cursos</h2>
                </Col>
                <Col lg={4} />
            </Row>
            <Row>
                <Col lg={4} />
                <Col lg={16}>
                    <Row className="row-cards">
                        <Col md={8}>
                            <CardReview
                                name="Alonso Capos"
                                subtitle="Alumno de udemy"
                                avatar={AvatarPersona}
                                review="Un curso excelente, el profesor explica detalladamente como funciona react native y tambien como hacer componente por componente, he buscado muchos cursos de react native, pero ninguno me ha dado tanto como este."
                            />
                        </Col>
                        <Col md={8}>
                            <CardReview
                                name="David Fuentes"
                                subtitle="Alumno de udemy"
                                avatar={AvatarPersona}
                                review="Un curso excelente, el profesor explica detalladamente como funciona react native y tambien como hacer componente por componente, he buscado muchos cursos de react native, pero ninguno me ha dado tanto como este."
                            />
                        </Col>
                        <Col md={8}>
                            <CardReview
                                name="Valentina Rubio"
                                subtitle="Alumno de udemy"
                                avatar={AvatarPersona}
                                review="Un curso excelente, el profesor explica detalladamente como funciona react native y tambien como hacer componente por componente, he buscado muchos cursos de react native, pero ninguno me ha dado tanto como este."
                            />
                        </Col>
                    </Row>
                    <Row className="row-cards">
                        <Col md={8}>
                            <CardReview
                                name="Marc Perez"
                                subtitle="Alumno de udemy"
                                avatar={AvatarPersona}
                                review="Un curso excelente, el profesor explica detalladamente como funciona react native y tambien como hacer componente por componente, he buscado muchos cursos de react native, pero ninguno me ha dado tanto como este."
                            />
                        </Col>
                        <Col md={8}>
                            <CardReview
                                name="Jesus Cruz"
                                subtitle="Alumno de udemy"
                                avatar={AvatarPersona}
                                review="Un curso excelente, el profesor explica detalladamente como funciona react native y tambien como hacer componente por componente, he buscado muchos cursos de react native, pero ninguno me ha dado tanto como este."
                            />
                        </Col>
                        <Col md={8}>
                            <CardReview
                                name="Fernando Giminez"
                                subtitle="Alumno de udemy"
                                avatar={AvatarPersona}
                                review="Un curso excelente, el profesor explica detalladamente como funciona react native y tambien como hacer componente por componente, he buscado muchos cursos de react native, pero ninguno me ha dado tanto como este."
                            />
                        </Col>
                    </Row>
                </Col>
                <Col lg={4} />
            </Row>
        </Row>
    );
}

function CardReview(props) {
    const { name, subtitle, avatar, review } = props;
    const { Meta } = Card;

    return (
        <Card className="review-courses_card">
            <p>{review}</p>
            <Meta avatar={<Avatar src={avatar} />} title={name} description={subtitle} />
        </Card>
    );
}
