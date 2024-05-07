import dgspeech_200_1089 from './survey_audios/dgspeech_200/1089.wav';
import dgspeech_200_1188 from './survey_audios/dgspeech_200/1188.wav';
import dgspeech_200_121 from './survey_audios/dgspeech_200/121.wav';
import dgspeech_200_1580 from './survey_audios/dgspeech_200/1580.wav';
import dgspeech_200_237 from './survey_audios/dgspeech_200/237.wav';
import dgspeech_200_2830 from './survey_audios/dgspeech_200/2830.wav';
import dgspeech_200_4446 from './survey_audios/dgspeech_200/4446.wav';
import dgspeech_200_5105 from './survey_audios/dgspeech_200/5105.wav';
import dgspeech_200_61 from './survey_audios/dgspeech_200/61.wav';
import dgspeech_200_6829 from './survey_audios/dgspeech_200/6829.wav';

import fastspeech2_200_1089 from './survey_audios/fastspeech2_200/1089.wav';
import fastspeech2_200_1188 from './survey_audios/fastspeech2_200/1188.wav';
import fastspeech2_200_121 from './survey_audios/fastspeech2_200/121.wav';
import fastspeech2_200_1580 from './survey_audios/fastspeech2_200/1580.wav';
import fastspeech2_200_237 from './survey_audios/fastspeech2_200/237.wav';
import fastspeech2_200_2830 from './survey_audios/fastspeech2_200/2830.wav';
import fastspeech2_200_4446 from './survey_audios/fastspeech2_200/4446.wav';
import fastspeech2_200_5105 from './survey_audios/fastspeech2_200/5105.wav';
import fastspeech2_200_61 from './survey_audios/fastspeech2_200/61.wav';
import fastspeech2_200_6829 from './survey_audios/fastspeech2_200/6829.wav';

import vocoder_1089 from './survey_audios/vocoder/1089.wav';
import vocoder_1188 from './survey_audios/vocoder/1188.wav';
import vocoder_121 from './survey_audios/vocoder/121.wav';
import vocoder_1580 from './survey_audios/vocoder/1580.wav';
import vocoder_237 from './survey_audios/vocoder/237.wav';
import vocoder_2830 from './survey_audios/vocoder/2830.wav';
import vocoder_4446 from './survey_audios/vocoder/4446.wav';
import vocoder_5105 from './survey_audios/vocoder/5105.wav';
import vocoder_61 from './survey_audios/vocoder/61.wav';
import vocoder_6829 from './survey_audios/vocoder/6829.wav';

import dgspecch_80_1089 from './survey_audios/dgspecch_80/1089.wav';
import dgspecch_80_1188 from './survey_audios/dgspecch_80/1188.wav';
import dgspecch_80_121 from './survey_audios/dgspecch_80/121.wav';
import dgspecch_80_1580 from './survey_audios/dgspecch_80/1580.wav';
import dgspecch_80_237 from './survey_audios/dgspecch_80/237.wav';
import dgspecch_80_2830 from './survey_audios/dgspecch_80/2830.wav';
import dgspecch_80_4446 from './survey_audios/dgspecch_80/4446.wav';
import dgspecch_80_5105 from './survey_audios/dgspecch_80/5105.wav';
import dgspecch_80_61 from './survey_audios/dgspecch_80/61.wav';
import dgspecch_80_6829 from './survey_audios/dgspecch_80/6829.wav';

import dgspeech_wo_glow_80_1089 from './survey_audios/dgspeech_wo_glow_80/1089.wav';
import dgspeech_wo_glow_80_1188 from './survey_audios/dgspeech_wo_glow_80/1188.wav';
import dgspeech_wo_glow_80_121 from './survey_audios/dgspeech_wo_glow_80/121.wav';
import dgspeech_wo_glow_80_1580 from './survey_audios/dgspeech_wo_glow_80/1580.wav';
import dgspeech_wo_glow_80_237 from './survey_audios/dgspeech_wo_glow_80/237.wav';
import dgspeech_wo_glow_80_2830 from './survey_audios/dgspeech_wo_glow_80/2830.wav';
import dgspeech_wo_glow_80_4446 from './survey_audios/dgspeech_wo_glow_80/4446.wav';
import dgspeech_wo_glow_80_5105 from './survey_audios/dgspeech_wo_glow_80/5105.wav';
import dgspeech_wo_glow_80_61 from './survey_audios/dgspeech_wo_glow_80/61.wav';
import dgspeech_wo_glow_80_6829 from './survey_audios/dgspeech_wo_glow_80/6829.wav';

import dgspeech_wo_mixstyle_80_1089 from './survey_audios/dgspeech_wo_mixstyle_80/1089.wav';
import dgspeech_wo_mixstyle_80_1188 from './survey_audios/dgspeech_wo_mixstyle_80/1188.wav';
import dgspeech_wo_mixstyle_80_121 from './survey_audios/dgspeech_wo_mixstyle_80/121.wav';
import dgspeech_wo_mixstyle_80_1580 from './survey_audios/dgspeech_wo_mixstyle_80/1580.wav';
import dgspeech_wo_mixstyle_80_237 from './survey_audios/dgspeech_wo_mixstyle_80/237.wav';
import dgspeech_wo_mixstyle_80_2830 from './survey_audios/dgspeech_wo_mixstyle_80/2830.wav';
import dgspeech_wo_mixstyle_80_4446 from './survey_audios/dgspeech_wo_mixstyle_80/4446.wav';
import dgspeech_wo_mixstyle_80_5105 from './survey_audios/dgspeech_wo_mixstyle_80/5105.wav';
import dgspeech_wo_mixstyle_80_61 from './survey_audios/dgspeech_wo_mixstyle_80/61.wav';
import dgspeech_wo_mixstyle_80_6829 from './survey_audios/dgspeech_wo_mixstyle_80/6829.wav';

interface SurveyAudioAssets {
  [model: string]: {
    [name: string]: {
      src: string;
      transcript: string;
    };
  };
}

export const surveyAudioAssets: SurveyAudioAssets = {
  dgspeech_200: {
    '61.wav': {
      src: dgspeech_200_61,
      transcript: 'Robin entered the hut, dragging the unwilling esquire after him',
    },
    '121.wav': {
      src: dgspeech_200_121,
      transcript:
        'Those pretty wrongs that liberty commits,When I am sometime absent from thy heart, thy years full well befits, for still temptation follows where thou art',
    },
    '237.wav': {
      src: dgspeech_200_237,
      transcript: 'If she could only see Phronsie for just one moment!',
    },
    '1089.wav': {
      src: dgspeech_200_1089,
      transcript: 'He could wait no longer',
    },
    '1188.wav': {
      src: dgspeech_200_1188,
      transcript:
        'You will find me continually speaking of four men—Titian, Holbein, Turner, and Tintoret—in almost the same terms',
    },
    '1580.wav': {
      src: dgspeech_200_1580,
      transcript:
        'I will endeavour in my statement to avoid such terms as would serve to limit the events to any particular place, or give a clue as to the people concerned',
    },
    '2830.wav': {
      src: dgspeech_200_2830,
      transcript:
        "It presents like no other of Luther's writings the central thought of Christianity, the justification of the sinner for the sake of Christ's merits alone",
    },
    '4446.wav': {
      src: dgspeech_200_4446,
      transcript:
        'The strange woman, and her passionate sentence that rang out so sharply, had frightened them both',
    },
    '5105.wav': {
      src: dgspeech_200_5105,
      transcript:
        'He seemed born to please without being conscious of the power he possessed',
    },
    '6829.wav': {
      src: dgspeech_200_6829,
      transcript:
        'Some girl has been here twice to interview my men and I have refused to admit her',
    },
  },
  fastspeech2_200: {
    '61.wav': {
      src: fastspeech2_200_61,
      transcript: 'Robin entered the hut, dragging the unwilling esquire after him',
    },
    '121.wav': {
      src: fastspeech2_200_121,
      transcript:
        'Those pretty wrongs that liberty commits,When I am sometime absent from thy heart, thy years full well befits, for still temptation follows where thou art',
    },
    '237.wav': {
      src: fastspeech2_200_237,
      transcript: 'If she could only see Phronsie for just one moment!',
    },
    '1089.wav': {
      src: fastspeech2_200_1089,
      transcript: 'He could wait no longer',
    },
    '1188.wav': {
      src: fastspeech2_200_1188,
      transcript:
        'You will find me continually speaking of four men—Titian, Holbein, Turner, and Tintoret—in almost the same terms',
    },
    '1580.wav': {
      src: fastspeech2_200_1580,
      transcript:
        'I will endeavour in my statement to avoid such terms as would serve to limit the events to any particular place, or give a clue as to the people concerned',
    },
    '2830.wav': {
      src: fastspeech2_200_2830,
      transcript:
        "It presents like no other of Luther's writings the central thought of Christianity, the justification of the sinner for the sake of Christ's merits alone",
    },
    '4446.wav': {
      src: fastspeech2_200_4446,
      transcript:
        'The strange woman, and her passionate sentence that rang out so sharply, had frightened them both',
    },
    '5105.wav': {
      src: fastspeech2_200_5105,
      transcript:
        'He seemed born to please without being conscious of the power he possessed',
    },
    '6829.wav': {
      src: fastspeech2_200_6829,
      transcript:
        'Some girl has been here twice to interview my men and I have refused to admit her',
    },
  },
  vocoder: {
    '61.wav': {
      src: vocoder_61,
      transcript: 'Robin entered the hut, dragging the unwilling esquire after him',
    },
    '121.wav': {
      src: vocoder_121,
      transcript:
        'Those pretty wrongs that liberty commits,When I am sometime absent from thy heart, thy years full well befits, for still temptation follows where thou art',
    },
    '237.wav': {
      src: vocoder_237,
      transcript: 'If she could only see Phronsie for just one moment!',
    },
    '1089.wav': {
      src: vocoder_1089,
      transcript: 'He could wait no longer',
    },
    '1188.wav': {
      src: vocoder_1188,
      transcript:
        'You will find me continually speaking of four men—Titian, Holbein, Turner, and Tintoret—in almost the same terms',
    },
    '1580.wav': {
      src: vocoder_1580,
      transcript:
        'I will endeavour in my statement to avoid such terms as would serve to limit the events to any particular place, or give a clue as to the people concerned',
    },
    '2830.wav': {
      src: vocoder_2830,
      transcript:
        "It presents like no other of Luther's writings the central thought of Christianity, the justification of the sinner for the sake of Christ's merits alone",
    },
    '4446.wav': {
      src: vocoder_4446,
      transcript:
        'The strange woman, and her passionate sentence that rang out so sharply, had frightened them both',
    },
    '5105.wav': {
      src: vocoder_5105,
      transcript:
        'He seemed born to please without being conscious of the power he possessed',
    },
    '6829.wav': {
      src: vocoder_6829,
      transcript:
        'Some girl has been here twice to interview my men and I have refused to admit her',
    },
  },
  dgspecch_80: {
    '61.wav': {
      src: dgspecch_80_61,
      transcript: 'Robin entered the hut, dragging the unwilling esquire after him',
    },
    '121.wav': {
      src: dgspecch_80_121,
      transcript:
        'Those pretty wrongs that liberty commits,When I am sometime absent from thy heart, thy years full well befits, for still temptation follows where thou art',
    },
    '237.wav': {
      src: dgspecch_80_237,
      transcript: 'If she could only see Phronsie for just one moment!',
    },
    '1089.wav': {
      src: dgspecch_80_1089,
      transcript: 'He could wait no longer',
    },
    '1188.wav': {
      src: dgspecch_80_1188,
      transcript:
        'You will find me continually speaking of four men—Titian, Holbein, Turner, and Tintoret—in almost the same terms',
    },
    '1580.wav': {
      src: dgspecch_80_1580,
      transcript:
        'I will endeavour in my statement to avoid such terms as would serve to limit the events to any particular place, or give a clue as to the people concerned',
    },
    '2830.wav': {
      src: dgspecch_80_2830,
      transcript:
        "It presents like no other of Luther's writings the central thought of Christianity, the justification of the sinner for the sake of Christ's merits alone",
    },
    '4446.wav': {
      src: dgspecch_80_4446,
      transcript:
        'The strange woman, and her passionate sentence that rang out so sharply, had frightened them both',
    },
    '5105.wav': {
      src: dgspecch_80_5105,
      transcript:
        'He seemed born to please without being conscious of the power he possessed',
    },
    '6829.wav': {
      src: dgspecch_80_6829,
      transcript:
        'Some girl has been here twice to interview my men and I have refused to admit her',
    },
  },
  dgspeech_wo_glow_80: {
    '61.wav': {
      src: dgspeech_wo_glow_80_61,
      transcript: 'Robin entered the hut, dragging the unwilling esquire after him',
    },
    '121.wav': {
      src: dgspeech_wo_glow_80_121,
      transcript:
        'Those pretty wrongs that liberty commits,When I am sometime absent from thy heart, thy years full well befits, for still temptation follows where thou art',
    },
    '237.wav': {
      src: dgspeech_wo_glow_80_237,
      transcript: 'If she could only see Phronsie for just one moment!',
    },
    '1089.wav': {
      src: dgspeech_wo_glow_80_1089,
      transcript: 'He could wait no longer',
    },
    '1188.wav': {
      src: dgspeech_wo_glow_80_1188,
      transcript:
        'You will find me continually speaking of four men—Titian, Holbein, Turner, and Tintoret—in almost the same terms',
    },
    '1580.wav': {
      src: dgspeech_wo_glow_80_1580,
      transcript:
        'I will endeavour in my statement to avoid such terms as would serve to limit the events to any particular place, or give a clue as to the people concerned',
    },
    '2830.wav': {
      src: dgspeech_wo_glow_80_2830,
      transcript:
        "It presents like no other of Luther's writings the central thought of Christianity, the justification of the sinner for the sake of Christ's merits alone",
    },
    '4446.wav': {
      src: dgspeech_wo_glow_80_4446,
      transcript:
        'The strange woman, and her passionate sentence that rang out so sharply, had frightened them both',
    },
    '5105.wav': {
      src: dgspeech_wo_glow_80_5105,
      transcript:
        'He seemed born to please without being conscious of the power he possessed',
    },
    '6829.wav': {
      src: dgspeech_wo_glow_80_6829,
      transcript:
        'Some girl has been here twice to interview my men and I have refused to admit her',
    },
  },
  dgspeech_wo_mixstyle_80: {
    '61.wav': {
      src: dgspeech_wo_mixstyle_80_61,
      transcript: 'Robin entered the hut, dragging the unwilling esquire after him',
    },
    '121.wav': {
      src: dgspeech_wo_mixstyle_80_121,
      transcript:
        'Those pretty wrongs that liberty commits,When I am sometime absent from thy heart, thy years full well befits, for still temptation follows where thou art',
    },
    '237.wav': {
      src: dgspeech_wo_mixstyle_80_237,
      transcript: 'If she could only see Phronsie for just one moment!',
    },
    '1089.wav': {
      src: dgspeech_wo_mixstyle_80_1089,
      transcript: 'He could wait no longer',
    },
    '1188.wav': {
      src: dgspeech_wo_mixstyle_80_1188,
      transcript:
        'You will find me continually speaking of four men—Titian, Holbein, Turner, and Tintoret—in almost the same terms',
    },
    '1580.wav': {
      src: dgspeech_wo_mixstyle_80_1580,
      transcript:
        'I will endeavour in my statement to avoid such terms as would serve to limit the events to any particular place, or give a clue as to the people concerned',
    },
    '2830.wav': {
      src: dgspeech_wo_mixstyle_80_2830,
      transcript:
        "It presents like no other of Luther's writings the central thought of Christianity, the justification of the sinner for the sake of Christ's merits alone",
    },
    '4446.wav': {
      src: dgspeech_wo_mixstyle_80_4446,
      transcript:
        'The strange woman, and her passionate sentence that rang out so sharply, had frightened them both',
    },
    '5105.wav': {
      src: dgspeech_wo_mixstyle_80_5105,
      transcript:
        'He seemed born to please without being conscious of the power he possessed',
    },
    '6829.wav': {
      src: dgspeech_wo_mixstyle_80_6829,
      transcript:
        'Some girl has been here twice to interview my men and I have refused to admit her',
    },
  },
};
