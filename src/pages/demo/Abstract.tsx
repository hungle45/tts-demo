import { Image } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import Title from 'antd/es/typography/Title';
import dgspeech from '../../assets/DGSpeech.png';

const Abstract: React.FC = () => {
  return (
    <>
      <Title level={3} style={{ marginTop: 0 }}>
        Abstract
      </Title>

      <div
        style={{ width: '100%', maxWidth: '840px', margin: 'auto', marginBottom: '8px' }}
      >
        <Image width={'100%'} src={dgspeech} style={{ padding: '8px 24px 12px' }} />
      </div>
      <Paragraph style={{ textAlign: 'justify' }}>
        The demand for Text-To-Speech (TTS) technology is increasing with the advancement
        of artificial intelligence. To meet the current needs, lots of research and
        experimentation have been conducted to enhance TTS capabilities, resulting in the
        development of a baseline model showcasing substantial proficiency in converting
        text to speech. However, challenges remain in the domain of voice cloning, where
        generated voices often lack fidelity to the originals and zero-shot learning
        methods have shown limited effectiveness with unseen datasets. To address these
        challenges, this project introduces DGSpeech, which is built on the FastSpeech2
        architecture. DGSpeech incorporates mix-style layer normalization and flow-based
        post-net enhancements to improve voice cloning performance. Experimental
        evaluations compare DGSpeech with the baseline technique, which relies on
        FastSpeech2. Results indicate that DGSpeech achieves a Mean Opinion Score (MOS) of
        3.71, surpassing the baseline technique's MOS of 3.37 in terms of naturalness.
        However, DGSpeech exhibits a slightly lower performance in Word Error Rate (WER)
        compared to the baseline. Further analysis reveals that DGSpeech generally
        outperforms the baseline model in cosine similarity metrics, particularly among
        speakers included in the training data. Nonetheless, challenges remain with unseen
        speakers, highlighting opportunities for future research and refinement.
      </Paragraph>
    </>
  );
};

export default Abstract;
