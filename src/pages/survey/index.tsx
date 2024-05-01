import { Divider } from 'antd';
import Title from 'antd/es/typography/Title';
import ContentBody from '../../components/ContentBody.tsx';
import PageTitle from '../../components/PageTitle.tsx';
import Instruction from './Instruction.tsx';
import MosForm from './MosForm.tsx';

const SurveyPage: React.FC = () => {
  return (
    <>
      <PageTitle title="MOS experiments" subTitle="Synthetic speech quality assessment" />
      <ContentBody>
        <Title level={4} style={{ textAlign: 'center' }}>
          MOS Survey
        </Title>
        <Divider style={{ marginTop: 0, marginBottom: 16 }} />
        <Instruction />
        <MosForm />
      </ContentBody>
    </>
  );
};

export default SurveyPage;
