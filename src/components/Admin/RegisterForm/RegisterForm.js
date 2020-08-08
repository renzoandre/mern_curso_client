import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { emailValidation, minLengthValidation } from '../../../utils/formValidation';
import { signUpApi } from '../../../api/user';

import './RegisterForm.scss';

export default function RegisterForm() {
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        passwordRepeat: '',
        privacyPolicy: false,
    });

    const [formValid, setFormValid] = useState({
        email: false,
        password: false,
        passwordRepeat: false,
        privacyPolicy: false,
    });

    const inputValidation = (e) => {
        const { type, name } = e.target;

        if (type === 'email') {
            setFormValid({
                ...formValid,
                [name]: emailValidation(e.target),
            });
        }

        if (type === 'password') {
            setFormValid({
                ...formValid,
                [name]: minLengthValidation(e.target, 6),
            });
        }

        if (type === 'checkbox') {
            setFormValid({
                ...formValid,
                [name]: e.target.checked,
            });
        }
    };

    const onChangeForm = (e) => {
        if (e.target.name === 'privacyPolicy') {
            setInputs({
                ...inputs,
                [e.target.name]: e.target.checked,
            });
        } else {
            setInputs({
                ...inputs,
                [e.target.name]: e.target.value,
            });
        }
    };

    const onRegister = async (e) => {
        const emailVal = inputs.email;
        const passwordVal = inputs.password;
        const passwordRepeatVal = inputs.passwordRepeat;
        const privacyPolicyVal = inputs.privacyPolicy;

        if (!emailVal || !passwordVal || !passwordRepeatVal || !privacyPolicyVal) {
            notification['error']({
                message: 'Todos los campos son obligatorios.',
            });
        } else {
            if (passwordVal !== passwordRepeatVal) {
                notification['error']({
                    message: 'Las contraseñas tienen que ser iguales.',
                });
            } else {
                const result = await signUpApi(inputs);
                if (!result.ok) {
                    notification['error']({
                        message: result.message,
                    });
                } else {
                    notification['success']({
                        message: result.message,
                    });
                    resetForm();
                }
            }
        }
    };

    const resetForm = () => {
        const inputs = document.getElementsByTagName('input');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].classList.remove('success');
            inputs[i].classList.remove('error');
        }
        setInputs({
            email: '',
            password: '',
            passwordRepeat: '',
            privacyPolicy: false,
        });
        setFormValid({
            email: false,
            password: false,
            passwordRepeat: false,
            privacyPolicy: false,
        });
    };

    return (
        <Form className="registr-form" onChange={onChangeForm} onFinish={onRegister}>
            <Form.Item>
                <Input
                    prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="email"
                    name="email"
                    placeholder="Correlo electronico"
                    className="register-form_input"
                    onChange={inputValidation}
                    value={inputs.email}
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    className="register-form_input"
                    onChange={inputValidation}
                    value={inputs.password}
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    name="passwordRepeat"
                    placeholder="Repetir contraseña"
                    className="register-form_input"
                    onChange={inputValidation}
                    value={inputs.passwordRepeat}
                />
            </Form.Item>
            <Form.Item>
                <Checkbox name="privacyPolicy" checked={inputs.privacyPolicy} onChange={inputValidation}>
                    He leido y acepto las politicas de privacidad
                </Checkbox>
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" className="register-form_button">
                    Crear cuenta
                </Button>
            </Form.Item>
        </Form>
    );
}
