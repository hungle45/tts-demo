import Paragraph from 'antd/es/typography/Paragraph';
import Title from 'antd/es/typography/Title';
import ContentBody from '../../components/ContentBody.tsx';

const DemoPage: React.FC = () => {
  return (
    <>
      <Title level={3}>Demo Page</Title>

      <ContentBody>
        <Paragraph>Coming soon...</Paragraph>
      </ContentBody>
    </>
  );
};

export default DemoPage;
