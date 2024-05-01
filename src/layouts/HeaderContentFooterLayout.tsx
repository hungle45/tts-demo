import Layout, { Content, Footer, Header } from 'antd/es/layout/layout';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/Navbar.tsx';

const HeaderContentFooterLayout: React.FC = () => {
  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <NavBar />
      </Header>
      <Content
        style={{ margin: '0 auto', padding: '0 48px', width: '100%', maxWidth: '1200px' }}
      >
        <Outlet />
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default HeaderContentFooterLayout;
