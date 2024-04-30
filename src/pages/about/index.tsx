import Paragraph from 'antd/es/typography/Paragraph';
import Title from 'antd/es/typography/Title';
import ContentBody from '../../components/ContentBody.tsx';

const AboutPage: React.FC = () => {
  return (
    <>
      <Title level={3}>About</Title>

      <ContentBody>
        <Paragraph>Coming soon...</Paragraph>
      </ContentBody>
    </>
  );
};

export default AboutPage;
