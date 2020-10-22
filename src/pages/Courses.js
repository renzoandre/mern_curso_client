import React, { useState, useEffect } from 'react';
import { Row, Col, Spin, notification } from 'antd';
import { getCoursesApi } from '../api/course';
import PresentationCourse from '../components/Web/Courses/PresentationCourse';
import CoursesList from '../components/Web/Courses/CoursesList';

export default function Courses() {
    const [courses, setCourses] = useState(null);

    useEffect(() => {
        getCoursesApi()
            .then((response) => {
                if (response?.code !== 200) {
                    notification['warning']({ message: response.message });
                } else {
                    setCourses(response.courses);
                }
            })
            .catch((err) => {
                notification['error']({ message: 'Error en el servidor, intente más tarde' });
            });
    }, []);

    return (
        <Row>
            <Col md={4} />
            <Col md={16}>
                <PresentationCourse />
                {!courses ? (
                    <Spin tip="Cargando cursos" style={{ textAlign: 'center', width: '100%', padding: '20px' }} />
                ) : (
                    <CoursesList courses={courses} />
                )}
            </Col>
            <Col md={4} />
        </Row>
    );
}
