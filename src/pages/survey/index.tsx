import Paragraph from 'antd/es/typography/Paragraph';
import Title from 'antd/es/typography/Title';
import ContentBody from '../../components/ContentBody.tsx';

const SurveyPage: React.FC = () => {
  return (
    <>
      <Title level={3}>Survey</Title>

      <ContentBody>
        <Paragraph>Coming soon...</Paragraph>
      </ContentBody>
    </>
  );
};

export default SurveyPage;
