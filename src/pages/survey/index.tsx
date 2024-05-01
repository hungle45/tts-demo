import { Divider } from 'antd';
import ContentBody from '../../components/ContentBody.tsx';
import PageTitle from '../../components/PageTitle.tsx';
import Instruction from './Instruction.tsx';
import MosForm from './MosForm.tsx';

const SurveyPage: React.FC = () => {
  return (
    <>
      <PageTitle title="MOS experiments" subTitle="Synthetic speech quality assessment" />
      <Divider style={{ marginTop: 0, marginBottom: 16 }} />
      <Instruction />
      <ContentBody>
        <MosForm />
      </ContentBody>
    </>
  );
};

export default SurveyPage;
