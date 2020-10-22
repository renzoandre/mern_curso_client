import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu } from 'antd';
import { HomeOutlined, UserOutlined, MenuOutlined, BookOutlined, MessageOutlined } from '@ant-design/icons';

import './MenuSider.scss';
import Sider from 'antd/lib/layout/Sider';

function MenuSider(props) {
    const { menuCollapsed, location } = props;

    return (
        <Sider className="menu-sider" collapsed={menuCollapsed}>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={[location.pathname]}>
                <Menu.Item key="/admin">
                    <Link to={'/admin'}>
                        <HomeOutlined />
                        <span className="nav-text">Home</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="/admin/users">
                    <Link to={'/admin/users'}>
                        <UserOutlined />
                        <span className="nav-text">Usuarios</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="/admin/menu">
                    <Link to={'/admin/menu'}>
                        <MenuOutlined />
                        <span className="nav-text">Menú</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="/admin/courses">
                    <Link to={'/admin/courses'}>
                        <BookOutlined />
                        <span className="nav-text">Cursos</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="/admin/blog">
                    <Link to={'/admin/blog'}>
                        <MessageOutlined />
                        <span className="nav-text">Blog</span>
                    </Link>
                </Menu.Item>
            </Menu>
        </Sider>
    );
}

export default withRouter(MenuSider);
