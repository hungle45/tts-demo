import Paragraph from 'antd/es/typography/Paragraph';

const Instruction: React.FC = () => {
  return (
    <>
      <Paragraph>Thank you for participating in this experiment!</Paragraph>

      <Paragraph>
        In this experiment, we used a computer to synthesize human voices. The following
        audio files contain authentic audio recordings as well as synthesized sounds, and
        each sentence is accompanied by a transcript. Subjects were asked to listen using
        headphones and were given the following ratings based on the quality of each
        audio:
      </Paragraph>

      <Paragraph>
        <ul>
          <li>
            <b>1 - Very bad</b>: Very unnatural and difficult to understand.
          </li>
          <li>
            <b>2 - Bad</b>: Unnatural with clarity issues.
          </li>
          <li>
            <b>3 - Normal</b>: Mostly clear with minor unnatural elements.
          </li>
          <li>
            <b>4 - Good</b>: Natural and clear with slight imperfections.
          </li>
          <li>
            <b>5 - Very Good</b>: Completely natural, like a human speaker.
          </li>
        </ul>
      </Paragraph>
    </>
  );
};

export default Instruction;
