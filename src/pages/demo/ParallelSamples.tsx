import { demoAudioAssets } from '../../assets/demoAssets.tsx';
import AudioSamples, { AudioTab } from './AudioSamples';

const ParallelSamples: React.FC = () => {
  const title = 'Parallel Sample';
  const description =
    'In parallel style transfer, the synthesizer is given an audio clip matching the text it’s asked to synthesize (i.e. the reference and target text are the same).';

  const audioTabs: AudioTab[] = [
    {
      label: 'Seen Voice',
      headers: ['Reference', 'Baseline (FastSpeech2)', 'Proposed method (DGSpeech)'],
      data: [
        {
          transcript: demoAudioAssets[26].transcript,
          rows: [
            {
              speakerId: 'Librispeech 26',
              audios: demoAudioAssets[26].audios,
            },
          ],
        },
        {
          transcript: demoAudioAssets[83].transcript,
          rows: [
            {
              speakerId: 'Librispeech 83',
              audios: demoAudioAssets[83].audios,
            },
          ],
        },
      ],
    },
    {
      label: 'Unseen Voice',
      headers: ['Reference', 'Baseline (FastSpeech2)', 'Proposed method (DGSpeech)'],
      data: [
        {
          transcript: demoAudioAssets[4047].transcript,
          rows: [
            {
              speakerId: 'Librispeech 4047',
              audios: demoAudioAssets[4047].audios,
            },
          ],
        },
        {
          transcript: demoAudioAssets[6829].transcript,
          rows: [
            {
              speakerId: 'Librispeech 6829',
              audios: demoAudioAssets[6829].audios,
            },
          ],
        },
      ],
    },
  ];

  return <AudioSamples title={title} description={description} audioTabs={audioTabs} />;
};

export default ParallelSamples;
