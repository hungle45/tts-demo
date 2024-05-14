import { demoAudioAssets } from '../../assets/demoAssets.tsx';
import AudioSamples, { AudioTab } from './AudioSamples';

const NonParallelSamples: React.FC = () => {
  const title = 'Non-Parallel Sample';
  const description =
    'In non-parallel style transfer, the TTS system must transfer prosodic style when the source and target text are completely different. Below, contrast the monotonous prosody of the baseline with examples of long-form synthesis with a narrative source style.';

  const audioTabs: AudioTab[] = [
    {
      label: 'Seen Voice',
      headers: ['Reference', 'Baseline (FastSpeech2)', 'Proposed method (DGSpeech)'],
      data: [
        {
          transcript: demoAudioAssets[27].transcript,
          rows: [
            {
              speakerId: 'Librispeech 27',
              audios: demoAudioAssets[27].audios,
            },
          ],
        },
        {
          transcript: demoAudioAssets[32].transcript,
          rows: [
            {
              speakerId: 'Librispeech 32',
              audios: demoAudioAssets[32].audios,
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
          transcript: demoAudioAssets[5105].transcript,
          rows: [
            {
              speakerId: 'Librispeech 5105',
              audios: demoAudioAssets[5105].audios,
            },
          ],
        },
        {
          transcript: demoAudioAssets[8555].transcript,
          rows: [
            {
              speakerId: 'Librispeech 8555',
              audios: demoAudioAssets[8555].audios,
            },
          ],
        },
      ],
    },
  ];

  return <AudioSamples title={title} description={description} audioTabs={audioTabs} />;
};

export default NonParallelSamples;
