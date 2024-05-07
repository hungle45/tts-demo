import testAudio from '../../assets/survey_audios/dgspecch_80/1089.wav';
import AudioSamples, { AudioTab } from './AudioSamples';

const SeenSamples: React.FC = () => {
  const title = 'Seen Audio Sample';
  const description =
    'Minim laboris veniam esse incididunt ut ad exercitation non adipisicing Lorem eu. Lorem esse eiusmod qui minim dolore sunt duis fugiat in cillum ex Lorem deserunt. Do aliquip labore est laborum consectetur nostrud labore culpa laboris sunt officia ut. Elit laborum eiusmod proident eu velit dolore voluptate cupidatat.';

  const audioTabs: AudioTab[] = [
    {
      label: 'Sentence 1',
      transcript:
        'Content of Tab Pane 1 pariatur dolore ad ea occaecat voluptate laboris dolor ea nostrud veniam duis exercitation sint.',
      headers: [
        'Real demonstration utterance',
        'Adapt speaker embedding and finetune network',
        'Adapt speaker embedding (only)',
        'Encoder network',
      ],
      rows: [
        {
          speakerId: 'Librispeech 11',
          audios: [testAudio, testAudio, testAudio, testAudio],
        },
        {
          speakerId: 'Librispeech 12',
          audios: [testAudio, testAudio, testAudio, testAudio],
        },
        {
          speakerId: 'Librispeech 13',
          audios: [testAudio, testAudio, testAudio, testAudio],
        },
      ],
    },
    {
      label: 'Sentence 2',
      transcript:
        'Content of Tab Pane 2 pariatur dolore ad ea occaecat voluptate laboris dolor ea nostrud veniam duis exercitation sint.',
      headers: [
        'Real demonstration utterance',
        'Adapt speaker embedding and finetune network',
        'Adapt speaker embedding (only)',
        'Encoder network',
      ],
      rows: [
        {
          speakerId: 'Librispeech 21',
          audios: [testAudio, testAudio, testAudio, testAudio],
        },
        {
          speakerId: 'Librispeech 22',
          audios: [testAudio, testAudio, testAudio, testAudio],
        },
        {
          speakerId: 'Librispeech 23',
          audios: [testAudio, testAudio, testAudio, testAudio],
        },
      ],
    },
    {
      label: 'Sentence 3',
      transcript:
        'Content of Tab Pane 3 pariatur dolore ad ea occaecat voluptate laboris dolor ea nostrud veniam duis exercitation sint.',
      headers: [
        'Real demonstration utterance',
        'Adapt speaker embedding and finetune network',
        'Adapt speaker embedding (only)',
        'Encoder network',
      ],
      rows: [
        {
          speakerId: 'Librispeech 31',
          audios: [testAudio, testAudio, testAudio, testAudio],
        },
        {
          speakerId: 'Librispeech 32',
          audios: [testAudio, testAudio, testAudio, testAudio],
        },
        {
          speakerId: 'Librispeech 33',
          audios: [testAudio, testAudio, testAudio, testAudio],
        },
      ],
    },
  ];

  return <AudioSamples title={title} description={description} audioTabs={audioTabs} />;
};

export default SeenSamples;
