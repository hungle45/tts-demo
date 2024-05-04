import ContentBody from '../../components/ContentBody.tsx';
import PageTitle from '../../components/PageTitle.tsx';
import Abstract from './Abstract.tsx';
import AudioSamples from './AudioSamples.tsx';

const DemoPage: React.FC = () => {
  return (
    <>
      <PageTitle
        title="This is the thesis title"
        subTitle="Nguyen Minh My - Le Nguyen Hung"
      />

      <ContentBody>
        <Abstract />
        <AudioSamples />
        {/* <SeenSamples />
        <UnSeenSamples /> */}
      </ContentBody>
    </>
  );
};

export default DemoPage;
