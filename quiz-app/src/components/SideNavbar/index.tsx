import {
  DeliveredProcedureOutlined,
  DownOutlined,
  FileProtectOutlined,
  FileUnknownOutlined,
  HomeOutlined,
  ProfileOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Col, Dropdown, Input, Layout, Menu, Row, Space } from 'antd';
import { useAppDispatch } from 'app/hooks';
import { logout } from 'features/Login/loginSlice';
import { useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import router from 'routers/router';
const { Header, Content, Footer, Sider } = Layout;

const { Search } = Input;

const showContentMenus = (routers: any) => {
  let result = [];
  if (routers.length > 0) {
    result = routers.map((route: any, index: number) => {
      return <Route key={index} path={route.path} element={route.main} />;
    });
  }
  return <Routes>{result}</Routes>;
};

interface MenuElement {
  key: string;
  to: string;
  label: string;
  icon: any;
  children?: MenuElement[];
}

const menus: Array<MenuElement> = [
  {
    key: 'home',
    to: '/',
    label: 'Home page',
    icon: <HomeOutlined />,
    children: [],
  },
  {
    key: 'question-management',
    to: '/question-management',
    label: 'Question Management',
    icon: <FileUnknownOutlined />,
    children: [],
  },
  {
    key: 'exam-management',
    to: '/exam-management',
    label: 'Exam Management',
    icon: <ProfileOutlined />,
    children: [],
  },
  {
    key: 'quiz-management',
    to: '/quiz-management',
    label: 'Quiz Management',
    icon: <DeliveredProcedureOutlined />,
    children: [],
  },
  {
    key: 'account-management',
    to: '/account-management',
    label: 'Account',
    icon: <FileProtectOutlined />,
    children: [
      {
        key: 'Change-Password',
        to: '/Change-Password',
        label: 'Change Password',
        icon: <HomeOutlined />,
        children: [],
      },
      {
        key: 'edit-account',
        to: '/edit-account',
        label: 'Edit account',
        icon: <ProfileOutlined />,
        children: [],
      },
    ],
  },
  {
    key: 'users-management',
    to: '/users-management',
    label: 'User Management',
    icon: <FileProtectOutlined />,
    children: [],
  },
];

const menu = (
  <Menu
    items={[
      {
        label: <Link to="/information">Information</Link>,
        key: '0',
      },
      {
        type: 'divider',
      },
      {
        label: <Link to="/settings">Settings</Link>,
        key: '1',
      },
      {
        type: 'divider',
      },
      {
        label: <Link to="/logout">Logout</Link>,
        key: '3',
      },
    ]}
  />
);

const showSidebarMenu = (menus: any) => {
  let result = [];
  result = menus.map((item: any, index: number) => {
    return (
      <Menu.Item key={item.key} icon={item.icon}>
        <Link to={item.to} className="nav-text">
          {item.label}
        </Link>
      </Menu.Item>
    );
  });
  return (
    <Menu theme="dark" defaultSelectedKeys={['home']} mode="inline">
      {result}
    </Menu>
  );
};

const SideNavbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const onSearch = (value: string) => console.log(value);
  const token = localStorage.getItem('token');
  const nav = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    nav('/login');
  };
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div
          className="logo"
          style={{ color: '#fff', fontSize: '20px', textAlign: 'center', padding: '14px 0px' }}
        >
          EXAM
        </div>
        <div>{showSidebarMenu(menus)}</div>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
            display: 'inline-flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Row style={{ margin: '0 15px', width: '100%' }}>
            <Col
              span={16}
              style={{
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Search placeholder="input search text" onSearch={onSearch} enterButton />
            </Col>
            <Col span={8}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  color: '#fff',
                  fontSize: '18px',
                }}
              >
                {!token ? (
                  <>
                    <Link to="/login">Login</Link>/<Link to="/register">Register</Link>
                  </>
                ) : (
                  <>
                    <Avatar
                      style={{ backgroundColor: '#87d068', marginRight: '0.5rem' }}
                      icon={<UserOutlined />}
                    />
                    <Dropdown overlay={menu} trigger={['click']}>
                      <span onClick={(e) => e.preventDefault()} style={{ fontSize: '14px' }}>
                        <Space>
                          Ngoc Tuan
                          <DownOutlined />
                        </Space>
                      </span>
                    </Dropdown>
                  </>
                )}
              </div>
            </Col>
          </Row>
        </Header>
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            {showContentMenus(router)}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default SideNavbar;
