import { Layout, Menu } from 'antd';
import { useAppDispatch } from 'app/hooks';
import { Contents } from 'components/Contents';
import Headers from 'components/Header';
import { defaultMenus, features, settings } from 'constants/menus';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const { Sider } = Layout;

const showSidebarMenu = (token?: string) => {
  let defaults,
    itemFeatures,
    itemSettings = [];
  defaults = defaultMenus.map((item: any, index: number) => {
    return (
      <Menu.Item key={item.key}>
        <Link to={item.to} className="nav-text">
          {item.label}
        </Link>
      </Menu.Item>
    );
  });

  itemFeatures = features.map((item: any, index: number) => {
    return (
      <Menu.Item key={item.key}>
        <Link to={item.to} className="nav-text">
          {item.label}
        </Link>
      </Menu.Item>
    );
  });

  itemSettings = settings.map((item: any) => {
    return item.children.length > 0 ? (
      <Menu.SubMenu title={item.label} key={item.key}>
        {item.children.map((subItem: any) => {
          return (
            <Menu.Item key={subItem.key}>
              <Link to={subItem.to} className="nav-text">
                {subItem.label}
              </Link>
            </Menu.Item>
          );
        })}
      </Menu.SubMenu>
    ) : (
      <Menu.Item key={item.key}>
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
