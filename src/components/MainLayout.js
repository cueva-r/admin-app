import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import {
    AiOutlineDashboard,
    AiOutlineShoppingCart,
    AiOutlineUser,
    AiOutlineBgColors,
} from "react-icons/ai";
import { RiCouponLine } from "react-icons/ri";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { ImBlog } from "react-icons/im";
import { IoIosNotifications } from "react-icons/io";
import { FaClipboardList, FaBloggerB } from "react-icons/fa";
import { SiBrandfolder } from "react-icons/si";
import { BiCategoryAlt } from "react-icons/bi";
import { Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const navigate = useNavigate();
    return (
        <Layout /* onContextMenu={(e) => e.preventDefault()} */>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo">
                    <h2 className="text-white fs-5 text-center py-3 mb-0">
                        <span className="sm-logo">DR</span>
                        <span className="lg-logo">Dev Rico's</span>
                    </h2>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={[""]}
                    onClick={({ key }) => {
                        if (key == "signout") {
                        } else {
                            navigate(key);
                        }
                    }}
                    items={[
                        {
                            key: "",
                            icon: <AiOutlineDashboard className="fs-4" />,
                            label: "Dashboard",
                        },
                        {
                            key: "customers",
                            icon: <AiOutlineUser className="fs-4" />,
                            label: "Clientes",
                        },
                        {
                            key: "Catalog",
                            icon: <AiOutlineShoppingCart className="fs-4" />,
                            label: "Catálogo",
                            children: [
                                {
                                    key: "product",
                                    icon: <AiOutlineShoppingCart className="fs-4" />,
                                    label: "Agregar un producto",
                                },
                                {
                                    key: "list-product",
                                    icon: <AiOutlineShoppingCart className="fs-4" />,
                                    label: "Lista de productos",
                                },
                                {
                                    key: "brand",
                                    icon: <SiBrandfolder className="fs-4" />,
                                    label: "Marcas",
                                },
                                {
                                    key: "list-brand",
                                    icon: <SiBrandfolder className="fs-4" />,
                                    label: "Lista de marcas ",
                                },
                                {
                                    key: "category",
                                    icon: <BiCategoryAlt className="fs-4" />,
                                    label: "Categorías",
                                },
                                {
                                    key: "list-category",
                                    icon: <BiCategoryAlt className="fs-4" />,
                                    label: "Lista de categorías",
                                },
                                {
                                    key: "color",
                                    icon: <AiOutlineBgColors className="fs-4" />,
                                    label: "Color",
                                },
                                {
                                    key: "list-color",
                                    icon: <AiOutlineBgColors className="fs-4" />,
                                    label: "Lista de colores",
                                },
                            ],
                        },
                        {
                            key: "orders",
                            icon: <FaClipboardList className="fs-4" />,
                            label: "Ordenes",
                        },
                        {
                            key: "marketing",
                            icon: <RiCouponLine className="fs-4" />,
                            label: "Marketing",
                            children: [
                                {
                                    key: "coupon",
                                    icon: <ImBlog className="fs-4" />,
                                    label: "Agregar un cupón",
                                },
                                {
                                    key: "coupon-list",
                                    icon: <RiCouponLine className="fs-4" />,
                                    label: "Lista de cupones",
                                },
                            ],
                        },
                        {
                            key: "blogs",
                            icon: <FaBloggerB className="fs-4" />,
                            label: "Blogs",
                            children: [
                                {
                                    key: "blog",
                                    icon: <ImBlog className="fs-4" />,
                                    label: "Agregar blog",
                                },
                                {
                                    key: "blog-list",
                                    icon: <FaBloggerB className="fs-4" />,
                                    label: "Lista de blogs",
                                },
                                {
                                    key: "blog-category",
                                    icon: <ImBlog className="fs-4" />,
                                    label: "Agregar un blog de categoría",
                                },
                                {
                                    key: "blog-category-list",
                                    icon: <FaBloggerB className="fs-4" />,
                                    label: "Lista de categoría de blog",
                                },
                            ],
                        },
                        {
                            key: "enquiries",
                            icon: <FaClipboardList className="fs-4" />,
                            label: "Consultas",
                        },
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="d-flex justify-content-between ps-1 pe-5"
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    {React.createElement(
                        collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                        {
                            className: "trigger",
                            onClick: () => setCollapsed(!collapsed),
                        }
                    )}
                    <div className="d-flex gap-4 align-items-center">
                        <div className="position-relative">
                            <IoIosNotifications className="fs-4" />
                            <span className="badge bg-warning rounded-circle p-1 position-absolute">
                                3
                            </span>
                        </div>

                        <div className="d-flex gap-3 align-items-center dropdown">
                            <div>
                                <img
                                    width={32}
                                    height={32}
                                    src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg"
                                    alt=""
                                />
                            </div>
                            <div
                                role="button"
                                id="dropdownMenuLink"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <h5 className="mb-0">Navdeep</h5>
                                <p className="mb-0">navdeepdahiya753@gmail.com</p>
                            </div>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li>
                                    <Link
                                        className="dropdown-item py-1 mb-1"
                                        style={{ height: "auto", lineHeight: "20px" }}
                                        to="/"
                                    >
                                        Ver perfil
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="dropdown-item py-1 mb-1"
                                        style={{ height: "auto", lineHeight: "20px" }}
                                        to="/"
                                    >
                                        Cerrar sesión
                                    </Link>
                                </li>
                            </div>
                        </div>
                    </div>
                </Header>
                <Content
                    style={{
                        margin: "24px 16px",
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <ToastContainer
                        position="top-right"
                        autoClose={250}
                        hideProgressBar={false}
                        newestOnTop={true}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        theme="light"
                    />
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};
export default MainLayout;