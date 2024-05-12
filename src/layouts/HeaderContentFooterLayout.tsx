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
      <Footer style={{ textAlign: 'center', opacity: '0.4' }}>
        <div style={{ marginBottom: '8px' }}>
          Graduation Thesis 2024. Made with <span color="#fff">❤</span> by{' '}
        </div>
        <div>Le Nguyen Hung (2013360) - Nguyen Minh My (2013811)</div>
      </Footer>
    </Layout>
  );
};

export default HeaderContentFooterLayout;
