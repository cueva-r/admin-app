import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';

import { AiOutlineDashboard } from "react-icons/ai";
import { FaBlogger, FaUsers } from "react-icons/fa";
import { CiCircleList, CiShoppingCart } from "react-icons/ci";
import { SiBrandfolder } from "react-icons/si";
import { BiCategory } from "react-icons/bi";
import { IoIosColorPalette } from "react-icons/io";
import { MdPlaylistAddCheckCircle } from "react-icons/md";
import { GoQuestion } from "react-icons/go";

import { Layout, Menu, Button, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
const MainLayouts = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const navigate = useNavigate()
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical">
                    <h2 className='text-white fs-5 text-center py-3 mb-0'>
                        <span className='sm-logo'>AR</span>
                        <span className='lg-logo'>Dev rico's</span>
                    </h2>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['']}
                    onClick={({ key }) => {
                        if (key == "signout") {

                        } else {
                            navigate(key)
                        }
                    }}
                    items={[
                        {
                            key: '',
                            icon: <AiOutlineDashboard className='fs-4' />,
                            label: 'Dashboard',
                        },
                        {
                            key: 'customers',
                            icon: <FaUsers className='fs-4' />,
                            label: 'Clientes',
                        },
                        ,
                        {
                            key: 'catalog',
                            icon: <CiShoppingCart className='fs-4' />,
                            label: 'Catalogo',
                            children: [
                                {
                                    key: 'product',
                                    icon: <CiShoppingCart className='fs-4' />,
                                    label: 'Agregar producto',
                                },
                                {
                                    key: 'product-list',
                                    icon: <CiCircleList className='fs-4' />,
                                    label: 'Lista de productos',
                                },
                                {
                                    key: 'brand',
                                    icon: <SiBrandfolder className='fs-4' />,
                                    label: 'Marcas',
                                },
                                {
                                    key: 'brand-list',
                                    icon: <CiCircleList className='fs-4' />,
                                    label: 'Lista de marcas',
                                },
                                {
                                    key: 'category',
                                    icon: <BiCategory className='fs-4' />,
                                    label: 'Categorías',
                                },
                                {
                                    key: 'category-list',
                                    icon: <CiCircleList className='fs-4' />,
                                    label: 'Lista de categorías',
                                }
                                ,
                                {
                                    key: 'color',
                                    icon: <IoIosColorPalette className='fs-4' />,
                                    label: 'Color',
                                },
                                {
                                    key: 'color-list',
                                    icon: <CiCircleList className='fs-4' />,
                                    label: 'Lista de colores',
                                }
                            ]
                        },
                        {
                            key: 'orders',
                            icon: <MdPlaylistAddCheckCircle className='fs-4' />,
                            label: 'Ordenes',
                        },
                        {
                            key: 'blog',
                            icon: <FaBlogger className='fs-4' />,
                            label: 'Blog',
                            children: [
                                {
                                    key: 'blog',
                                    icon: <FaBlogger className='fs-4' />,
                                    label: 'Agregar blog',
                                },
                                {
                                    key: 'blog-list',
                                    icon: <CiCircleList className='fs-4' />,
                                    label: 'Lista de blog',
                                },
                                {
                                    key: 'blog-category',
                                    icon: <FaBlogger className='fs-4' />,
                                    label: 'Agregar blog de categoría',
                                },
                                {
                                    key: 'blog-category-list',
                                    icon: <CiCircleList className='fs-4' />,
                                    label: 'Lista de blog de categoría',
                                }
                            ]
                        },
                        {
                            key: 'enquiries',
                            icon: <GoQuestion className='fs-4' />,
                            label: 'Consultas',
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default MainLayouts;