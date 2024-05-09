import { Segmented, Typography } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import { useState } from 'react';

const { Text } = Typography;

const Instruction: React.FC = () => {
  const [language, setLanguage] = useState('vn');

  return (
    <Paragraph style={{ textAlign: 'justify' }}>
      <blockquote>
        <Segmented
          style={{ marginBottom: 16 }}
          options={[
            { label: '🇻🇳 Tiếng Việt', value: 'vn' },
            { label: '🇬🇧 English', value: 'en' },
          ]}
          value={language}
          onChange={(value) => setLanguage(value)}
        />
        <Paragraph hidden={language != 'en'}>
          <Paragraph>Thank you for participating in this experiment!</Paragraph>
          <Paragraph>
            In this experiment, we used a computer to synthesize human voices. The
            following audio files contain authentic audio recordings (made by humans) as
            well as synthesized sounds (made by AI), and each sentence is accompanied by a
            transcript. Subjects were asked to listen using headphones and were given
            ratings based on the quality of the audio.
          </Paragraph>
          <Paragraph>
            <Text>
              Just select the number that best reflects your impression of each sample.
            </Text>
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
          <Paragraph>
            <Text strong type="danger">
              Note: The following question order is randomly rendered, please listen do
              the survey again in case you have to reload this page!
            </Text>
          </Paragraph>
        </Paragraph>
        <Paragraph hidden={language != 'vn'}>
          <Paragraph>Cảm ơn bạn đã tham gia vào thí nghiệm của chúng tôi!</Paragraph>
          <Paragraph style={{ textAlign: 'justify' }}>
            Trong thí nghiệm này, chúng tôi đã sử dụng máy tính để tổng hợp giọng nói của
            con người. Các tệp âm thanh sau đây chứa cả các bản ghi âm được thu âm từ
            người thật và âm thanh tổng hợp bởi model AI, mỗi câu đều có kèm theo phụ đều
            tương ứng. Người tham gia được yêu cầu nghe và đưa ra đánh giá dựa trên chất
            lượng của từng đoạn âm thanh.
          </Paragraph>
          <Paragraph>
            <Text>Hãy chọn số điểm phản ánh cảm nhận của bạn về mỗi mẫu âm thanh</Text>
            <ul>
              <li>
                <b>1 - Rất tệ</b>: Cực kỳ không tự nhiên và khó hiểu.
              </li>
              <li>
                <b>2 - Tệ</b>: Thiếu tự nhiên, nghe không rõ ràng.
              </li>
              <li>
                <b>3 - Bình thường</b>: Tương đối rõ ràng nhưng có phần không tự nhiên.
              </li>
              <li>
                <b>4 - Tốt</b>: Nghe tự nhiên, rõ ràng nhưng vẫn có một số nhược điểm nhỏ.
              </li>
              <li>
                <b>5 - Rất tốt</b>: Hoàn toàn tự nhiên, nghe như thật.
              </li>
            </ul>
          </Paragraph>
          <Paragraph>
            <Text strong type="danger">
              Xin lưu ý: Thứ tự các câu hỏi sau đây được sinh một cách ngẫu nhiên. Xin hãy
              làm lại từ đầu trong trường hợp bạn phải reload lại trang này!
            </Text>
          </Paragraph>
        </Paragraph>
      </blockquote>
    </Paragraph>
  );
};

export default Instruction;
