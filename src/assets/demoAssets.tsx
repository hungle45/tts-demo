import baseline26 from './demo_audios/26/baseline.wav';
import dgspeech26 from './demo_audios/26/dgspeech.wav';
import gt26 from './demo_audios/26/gt.wav';

import baseline27 from './demo_audios/27/baseline.wav';
import dgspeech27 from './demo_audios/27/dgspeech.wav';
import gt27 from './demo_audios/27/gt.wav';

import baseline32 from './demo_audios/32/baseline.wav';
import dgspeech32 from './demo_audios/32/dgspeech.wav';
import gt32 from './demo_audios/32/gt.wav';

import baseline83 from './demo_audios/83/baseline.wav';
import dgspeech83 from './demo_audios/83/dgspeech.wav';
import gt83 from './demo_audios/83/gt.wav';

import baseline4047 from './demo_audios/4047/baseline.wav';
import dgspeech4047 from './demo_audios/4047/dgspeech.wav';
import gt4047 from './demo_audios/4047/gt.wav';

import baseline5105 from './demo_audios/5105/baseline.wav';
import dgspeech5105 from './demo_audios/5105/dgspeech.wav';
import gt5105 from './demo_audios/5105/gt.wav';

import baseline6829 from './demo_audios/6829/baseline.wav';
import dgspeech6829 from './demo_audios/6829/dgspeech.wav';
import gt6829 from './demo_audios/6829/gt.wav';

import baseline8555 from './demo_audios/8555/baseline.wav';
import dgspeech8555 from './demo_audios/8555/dgspeech.wav';
import gt8555 from './demo_audios/8555/gt.wav';

interface DemoAudioAssets {
  [key: number]: {
    transcript: string;
    audios: string[];
  };
}

export const demoAudioAssets: DemoAudioAssets = {
  26: {
    transcript: 'For if any one complained, it was immediately said he had the plague.',
    audios: [gt26, baseline26, dgspeech26],
  },
  27: {
    transcript:
      'All the clans hostile to the name of Campbell were set in motion: John Murray, Marquess of Athol.',
    audios: [gt27, baseline27, dgspeech27],
  },
  32: {
    transcript:
      "All went on well the remainder of the night, and the next day at ten o'clock, the boat arrived at New Orleans.",
    audios: [gt32, baseline32, dgspeech32],
  },
  83: {
    transcript: "A woman's life saved, the cause of her falling into the sea.",
    audios: [gt83, baseline83, dgspeech83],
  },
  4047: {
    transcript:
      'Its origin was small—a germ, an insignificant seed, hardly to be thought of as likely to arouse opposition.',
    audios: [gt4047, baseline4047, dgspeech4047],
  },
  5105: {
    transcript:
      'The late astounding events, however, had rendered Procope manifestly uneasy, and not the less so from his consciousness that the count secretly partook of his own anxiety.',
    audios: [gt5105, baseline5105, dgspeech5105],
  },
  6829: {
    transcript:
      'These women were flattered by the attention of the young lady and had promised to assist in electing Mr. Forbes.',
    audios: [gt6829, baseline6829, dgspeech6829],
  },
  8555: {
    transcript:
      'The pleasant graveyard of my soul with sentimental cypress trees, and flowers is filled, that I may stroll in meditation, at my ease.',
    audios: [gt8555, baseline8555, dgspeech8555],
  },
};
