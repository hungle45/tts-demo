import dgspeech1 from '../assets/audios/dgspeech/1.wav';
import dgspeech2 from '../assets/audios/dgspeech/2.wav';
import dgspeech3 from '../assets/audios/dgspeech/3.wav';
import dgspeech4 from '../assets/audios/dgspeech/4.wav';
import dgspeech5 from '../assets/audios/dgspeech/5.wav';
import dgspeech6 from '../assets/audios/dgspeech/6.wav';

import groundtruth1 from '../assets/audios/groundtruth/1.wav';
import groundtruth2 from '../assets/audios/groundtruth/2.wav';
import groundtruth3 from '../assets/audios/groundtruth/3.wav';
import groundtruth4 from '../assets/audios/groundtruth/4.wav';
import groundtruth5 from '../assets/audios/groundtruth/5.wav';
import groundtruth6 from '../assets/audios/groundtruth/6.wav';

interface AudioAssets {
  [model: string]: {
    [name: string]: {
      src: string;
      transcript: string;
    };
  };
}

export const audioAssets: AudioAssets = {
  dgspeech: {
    '1.wav': {
      src: dgspeech1,
      transcript: 'This is a test sentence dgspeech 1.',
    },
    '2.wav': {
      src: dgspeech2,
      transcript: 'This is a test sentence dgspeech 2.',
    },
    '3.wav': {
      src: dgspeech3,
      transcript: 'This is a test sentence dgspeech 3.',
    },
    '4.wav': {
      src: dgspeech4,
      transcript: 'This is a test sentence dgspeech 4.',
    },
    '5.wav': {
      src: dgspeech5,
      transcript: 'This is a test sentence dgspeech 5.',
    },
    '6.wav': {
      src: dgspeech6,
      transcript: 'This is a test sentence dgspeech 6.',
    },
  },
  groundtruth: {
    '1.wav': {
      src: groundtruth1,
      transcript: 'This is a test sentence groundtruth 1.',
    },
    '2.wav': {
      src: groundtruth2,
      transcript: 'This is a test sentence groundtruth 2.',
    },
    '3.wav': {
      src: groundtruth3,
      transcript: 'This is a test sentence groundtruth 3.',
    },
    '4.wav': {
      src: groundtruth4,
      transcript: 'This is a test sentence groundtruth 4.',
    },
    '5.wav': {
      src: groundtruth5,
      transcript: 'This is a test sentence groundtruth 5.',
    },
    '6.wav': {
      src: groundtruth6,
      transcript: 'This is a test sentence groundtruth 6.',
    },
  },
};
