import React from 'react';
import { Row, Col, Card, Button } from 'antd';
import { Link } from 'react-router-dom';
import reactJsHoojs from '../../../assets/img/jpg/react-js-hooks.jpg';
import reactNative from '../../../assets/img/jpg/react-native.jpg';
import javaScript from '../../../assets/img/jpg/javascript-es6.jpg';
import wordPress from '../../../assets/img/jpg/wordpress.jpg';
import prestaShop from '../../../assets/img/jpg/prestashop-1-7.jpg';
import cssGrid from '../../../assets/img/jpg/css-grid.jpg';

import './HomeCourses.scss';

export default function HomeCourses() {
    return (
        <Row className="home-courses">
            <Col lg={24} className="home-courses_title">
                <h2>Aprende y mejora tus habilidades</h2>
            </Col>
            <Col lg={4} />
            <Col lg={16}>
                <Row className="row-courses">
                    <Col md={6}>
                        <CardCourse
                            image={reactJsHoojs}
                            title="React JS hoos"
                            subtitle="Intermedio - React/JavaScript"
                            link="https://courses.agustinnavarrogaldon.com/react"
                        />
                    </Col>
                    <Col md={6}>
                        <CardCourse
                            image={reactNative}
                            title="React Native expo"
                            subtitle="Intermedio - React/JavaScript"
                            link="https://courses.agustinnavarrogaldon.com/react-native-expo"
                        />
                    </Col>
                    <Col md={6}>
                        <CardCourse
                            image={javaScript}
                            title="Java script ES6"
                            subtitle="Básico - JavaScript"
                            link="https://courses.agustinnavarrogaldon.com/javascript"
                        />
                    </Col>
                    <Col md={6}>
                        <CardCourse
                            image={wordPress}
                            title="Wordpress"
                            subtitle="Básico - Wordpress"
                            link="https://courses.agustinnavarrogaldon.com/wordpress"
                        />
                    </Col>
                </Row>
                <Row className="row-courses">
                    <Col md={6}>
                        <CardCourse
                            image={prestaShop}
                            title="Prestashop"
                            subtitle="Básico - Prestashop"
                            link="https://courses.agustinnavarrogaldon.com/prestashop"
                        />
                    </Col>
                    <Col md={6} />
                    <Col md={6} />
                    <Col md={6}>
                        <CardCourse
                            image={cssGrid}
                            title="CssGrid"
                            subtitle="Intermedio - CssGrid"
                            link="https://courses.agustinnavarrogaldon.com/cssgrid"
                        />
                    </Col>
                </Row>
            </Col>
            <Col lg={4} />
            <Col lg={24} className="home-courses_more">
                <Link to="/courses">
                    <Button>Ver más</Button>
                </Link>
            </Col>
        </Row>
    );
}

function CardCourse(props) {
    const { image, title, subtitle, link } = props;
    const { Meta } = Card;

    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <Card
                className="home-courses_card"
                cover={<img src={image} alt={title} />}
                actions={[<Button>INGRESAR</Button>]}
            >
                <Meta title={title} description={subtitle} />
            </Card>
        </a>
    );
}
