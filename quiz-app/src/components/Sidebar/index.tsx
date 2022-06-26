import {
    DeliveredProcedureOutlined, FileProtectOutlined,
    FileUnknownOutlined,
    HomeOutlined,
    ProfileOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      className="sidebar"
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="logo" style={{ textAlign: 'center', padding: '14px 0px' }}>
        <Link to="/" style={{ color: '#fff' }}>
          {/* <img src={Logo} alt="Logo" className="logo" /> */}
          QUIZZ
        </Link>
      </div>
      <div className="sidebar__menu">{showSidebarMenu(menus)}</div>
    </Sider>
  );
};
