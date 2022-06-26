import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Col, Dropdown, Input, Layout, Menu, Row, Space } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;
const { Search } = Input;

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
export default function Headers() {
  const token = localStorage.getItem('token');
  const onSearch = (value: string) => console.log(value);

  return (
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
  );
}
