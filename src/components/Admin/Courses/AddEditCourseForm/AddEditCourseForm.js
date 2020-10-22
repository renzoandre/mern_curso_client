import React, { useState, useEffect } from 'react';
import { Form, notification, Button, Input } from 'antd';
import { KeyOutlined, GifOutlined, DollarCircleOutlined, LinkOutlined } from '@ant-design/icons';
import { getAccessTokenApi } from '../../../../api/auth';
import { addCourseApi } from '../../../../api/course';
import { updateCourseApi } from '../../../../api/course';

import './AddEditCourseForm.scss';

export default function AddEditCourseForm(props) {
    const { setIsVisibleModal, setReloadCourses, course } = props;
    const [courseData, setCourseData] = useState({});

    useEffect(() => {
        course ? setCourseData(course) : setCourseData({});
    }, [course]);

    const addCourse = (e) => {
        if (!courseData.idCourse) {
            notification['error']({ message: 'El id del curso es obligatorio' });
        } else {
            const accessToken = getAccessTokenApi();
            addCourseApi(accessToken, courseData)
                .then((response) => {
                    const typeNotification = response.code === 200 ? 'success' : 'warning';
                    notification[typeNotification]({ message: response.message });
                    setIsVisibleModal(false);
                    setReloadCourses(true);
                    setCourseData({});
                })
                .catch((err) => {
                    notification['error']({ message: 'Error del servidor, intente más tarde' });
                });
        }
    };

    const updateCourse = (e) => {
        const accessToken = getAccessTokenApi();

        updateCourseApi(accessToken, course._id, courseData)
            .then((response) => {
                const typeNotification = response.code === 200 ? 'success' : 'warning';
                notification[typeNotification]({ message: response.message });
                setIsVisibleModal(false);
                setReloadCourses(true);
                setCourseData({});
            })
            .catch((err) => {
                notification['error']({ message: 'Error del servidor, intente más tarde' });
            });
    };

    return (
        <div className="add-edit-course-form">
            <AddEditForm
                course={course}
                addCourse={addCourse}
                updateCourse={updateCourse}
                setCourseData={setCourseData}
                courseData={courseData}
            />
        </div>
    );
}

function AddEditForm(props) {
    const { course, addCourse, updateCourse, setCourseData, courseData } = props;

    return (
        <Form className="form-add-edit" onFinish={course ? updateCourse : addCourse}>
            <Form.Item>
                <Input
                    prefix={<KeyOutlined />}
                    placeholder="ID del curso"
                    value={courseData.idCourse}
                    onChange={(e) => setCourseData({ ...courseData, idCourse: e.target.value })}
                    disabled={course ? true : false}
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<LinkOutlined />}
                    placeholder="Url del curso"
                    value={courseData.link}
                    onChange={(e) => setCourseData({ ...courseData, link: e.target.value })}
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<GifOutlined />}
                    placeholder="Cupon de descuento"
                    value={courseData.coupon}
                    onChange={(e) => setCourseData({ ...courseData, coupon: e.target.value })}
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<DollarCircleOutlined />}
                    placeholder="Precio"
                    value={courseData.price}
                    onChange={(e) => setCourseData({ ...courseData, price: e.target.value })}
                />
            </Form.Item>
            <Form.Item>
                <Button className="btn-submit" type="primary" htmlType="submit">
                    {course ? 'Actualizar curso' : 'Crear curso'}
                </Button>
            </Form.Item>
        </Form>
    );
}
