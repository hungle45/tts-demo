import ContentBody from '../../components/ContentBody.tsx';
import PageTitle from '../../components/PageTitle.tsx';
import Abstract from './Abstract.tsx';
import NonParallelSamples from './NonParallelSamples.tsx';
import ParallelSamples from './ParallelSamples.tsx';

const DemoPage: React.FC = () => {
  return (
    <>
      <PageTitle
        title="This is the thesis title"
        subTitle="Nguyen Minh My - Le Nguyen Hung"
      />

      <ContentBody>
        <Abstract />
        <ParallelSamples />
        <NonParallelSamples />
      </ContentBody>
    </>
  );
};

export default DemoPage;
