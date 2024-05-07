import { Divider } from 'antd';
import Title from 'antd/es/typography/Title';
import { useState } from 'react';
import ContentBody from '../../components/ContentBody.tsx';
import PageTitle from '../../components/PageTitle.tsx';
import Instruction from './Instruction.tsx';
import MosForm from './MosForm.tsx';

const SurveyPage: React.FC = () => {
  const [language, setLanguage] = useState('vn');

  return (
    <>
      <PageTitle title="MOS experiments" subTitle="Synthetic speech quality assessment" />
      <ContentBody>
        <Title level={2} style={{ textAlign: 'center' }}>
          MOS Survey
        </Title>
        <Instruction language={language} setLanguage={setLanguage} />
        <Divider style={{ marginTop: 0, marginBottom: 16 }} />
        <MosForm language={language} />
      </ContentBody>
    </>
  );
};

export default SurveyPage;
