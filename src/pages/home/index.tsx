import Paragraph from 'antd/es/typography/Paragraph';
import Title from 'antd/es/typography/Title';
import ContentBody from '../../components/ContentBody.tsx';

const HomePage: React.FC = () => {
  return (
    <>
      <Title level={3}>Home Page</Title>

      <ContentBody>
        <Paragraph>Welcome to the home page.</Paragraph>
      </ContentBody>
    </>
  );
};

export default HomePage;
