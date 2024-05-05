import ContentBody from '../../components/ContentBody.tsx';
import PageTitle from '../../components/PageTitle.tsx';
import Abstract from './Abstract.tsx';
import SeenSamples from './SeenSamples.tsx';
import UnseenSamples from './UnseenSamples.tsx';

const DemoPage: React.FC = () => {
  return (
    <>
      <PageTitle
        title="This is the thesis title"
        subTitle="Nguyen Minh My - Le Nguyen Hung"
      />

      <ContentBody>
        <Abstract />
        <SeenSamples />
        <UnseenSamples />
      </ContentBody>
    </>
  );
};

export default DemoPage;
