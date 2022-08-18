import { BackTop, Layout } from 'antd';
import { ShowRoutes } from 'helper/Func/ShowRoutes';
import userRoutes from 'routers/userRoutes';
const { Content } = Layout;

export const Contents = () => {
  return (
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
        {ShowRoutes(userRoutes)}
      </div>
      <BackTop />
    </Content>
  );
};
