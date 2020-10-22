import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Button, Rate, notification } from 'antd';
import { getCourseDataUdemyApi } from '../../../../api/course';

import './CoursesList.scss';

export default function CoursesList(props) {
    const { courses } = props;

    return (
        <div className="courses-list">
            <Row>
                {courses.map((course) => (
                    <Col md={8} key={course._id} className="courses-list_course">
                        <Course course={course} />
                    </Col>
                ))}
            </Row>
        </div>
    );
}

function Course(props) {
    const { course } = props;
    const [courseInfo, setCourseInfo] = useState({});
    const [urlCourse, setUrlCourse] = useState('');
    const { Meta } = Card;

    useEffect(() => {
        getCourseDataUdemyApi(course.idCourse)
            .then((response) => {
                if (response?.code !== 200) {
                    notification['warning']({ message: response.message });
                } else {
                    setCourseInfo(response.data);
                    mountUrl(response.data.url);
                }
            })
            .catch((err) => {
                notification['error']({ message: 'Error en el servidor, intente más tarde' });
            });
    }, [course]);

    const mountUrl = (url) => {
        if (!course.link) {
            const baseUrl = `https://www.udemy.com${url}`;
            const finalUrl = baseUrl + (course.coupon ? `?couponCode=${course.coupon}` : '');
            console.log(finalUrl);
            setUrlCourse(finalUrl);
        } else {
            setUrlCourse(course.link);
            console.log(course.link);
        }
    };

    return (
        <a href={urlCourse} target="_blank" rel="noopener noreferrer">
            <Card cover={<img src={courseInfo.image_480x270} alt={courseInfo.title} />}>
                <Meta title={courseInfo.title} description={courseInfo.headline} />
                <Button>Entrar en el curso</Button>
                <div className="courses-list_course-footer">
                    <span>{course.price ? `${course.price}` : courseInfo.price}</span>
                    <Rate disabled defaultValue={5} />
                </div>
            </Card>
        </a>
    );
}
