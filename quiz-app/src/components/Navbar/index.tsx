import {
  DeliveredProcedureOutlined,
  FileProtectOutlined,
  FileUnknownOutlined,
  HomeOutlined,
  ProfileOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useAppDispatch } from 'app/hooks';
import { Contents } from 'components/Contents';
import Headers from 'components/Header';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const { Sider } = Layout;

interface MenuElement {
  key: string;
  to: string;
  label: string;
  icon: any;
  children?: MenuElement[];
}

const defaultMenus: Array<MenuElement> = [
  {
    key: 'home',
    to: '/',
    label: 'Home page',
    icon: <HomeOutlined />,
    children: [],
  },
];

const features: Array<MenuElement> = [
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
];

const settings: Array<MenuElement> = [
  {
    key: 'account-management',
    to: '/account-management',
    label: 'Account',
    icon: <ProfileOutlined />,
    children: [
      {
        key: 'change-Password',
        to: '/change-Password',
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
    children: [
      {
        key: 'option1',
        to: '/option1',
        label: 'option1',
        icon: <HomeOutlined />,
        children: [],
      },
      {
        key: 'option2',
        to: '/option2',
        label: 'option2',
        icon: <HomeOutlined />,
        children: [],
      },
      {
        key: 'option3',
        to: '/option3',
        label: 'option3',
        icon: <ProfileOutlined />,
        children: [],
      },
    ],
  },
];

const showSidebarMenu = (token?: string) => {
  let defaults,
    itemFeatures,
    itemSettings = [];
  defaults = defaultMenus.map((item: any, index: number) => {
    return (
      <Menu.Item key={item.key} icon={item.icon}>
        <Link to={item.to} className="nav-text">
          {item.label}
        </Link>
      </Menu.Item>
    );
  });

  itemFeatures = features.map((item: any, index: number) => {
    return (
      <Menu.Item key={item.key} icon={item.icon}>
        <Link to={item.to} className="nav-text">
          {item.label}
        </Link>
      </Menu.Item>
    );
  });

  itemSettings = settings.map((item: any) => {
    return item.children.length > 0 ? (
      <Menu.SubMenu title={item.label} key={item.key} icon={item.icon}>
        {item.children.map((subItem: any) => {
          return (
            <Menu.Item key={subItem.key} icon={subItem.icon}>
              {subItem.label}
            </Menu.Item>
          );
        })}
      </Menu.SubMenu>
    ) : (
      <Menu.Item key={item.key} icon={item.icon}>
        {item.label}
      </Menu.Item>
    );
  });

  return (
    <Menu theme="dark" defaultSelectedKeys={['home']} mode="inline">
      {token ? (
        <>
          {defaults} {itemFeatures} {itemSettings}
        </>
      ) : (
        defaults
      )}
    </Menu>
  );
};
const Navbar = () => {
  const nav = useNavigate();
  const dispatch = useAppDispatch();
  const [collapsed, setCollapsed] = useState(false);
  const token = localStorage.getItem('token');

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider
        className="sidebar"
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo" style={{ textAlign: 'center', padding: '19px 0px' }}>
          <Link to="/" style={{ color: '#fff' }}>
            {/* <img src={Logo} alt="Logo" className="logo" /> */}
            EXAM
          </Link>
        </div>
        <div className="sidebar__menu">{token ? showSidebarMenu(token) : showSidebarMenu()}</div>
      </Sider>
      <Layout className="site-layout">
        <Headers />
        <Contents />
      </Layout>
    </Layout>
  );
};

export default Navbar;
