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
        <Title level={5} type="danger" style={{ fontWeight: 400 }}>
          The form has been closed. Thank you for your participation.
        </Title>
        <Title level={2} style={{ textAlign: 'center' }}>
          MOS Survey
        </Title>
        <div style={{ color: 'gray' }}>
          <Instruction />
          <Divider style={{ marginTop: 0, marginBottom: 16 }} />
          <MosForm />
        </div>
      </ContentBody>
    </>
  );
};

export default SurveyPage;
