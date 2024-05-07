import { Card, Form, Select, Typography } from 'antd';
import { AudioType } from './dto.tsx';

const { Text } = Typography;
const { Option } = Select;

const AudioCard: React.FC<{ audioKey: number; audio: AudioType; language: string }> = ({
  audioKey,
  audio,
  language,
}) => {
  return (
    <Card
      size="small"
      title={`Audio ${audioKey + 1}`}
      key={audioKey}
      type="inner"
      style={{ marginBottom: 24, boxShadow: '1px 1px 8px 4px rgba(208, 216, 243, 0.4)' }}
    >
      Transcript: <Text italic>{audio.transcript}</Text>
      <audio
        controls
        src={audio.src}
        style={{
          width: '100%',
          height: '30px',
          marginTop: 6,
          marginBottom: 6,
        }}
      />
      <Form.Item
        name={['rating', audioKey]}
        rules={[{ required: true, message: 'Please rate the quality of the speech' }]}
        style={{ marginBottom: 0 }}
      >
        <Select placeholder="Rate the quality of the speech" allowClear>
          <Option value={1}>
            {language === 'en' ? (
              <>
                <b>{'1 - Very bad'}</b>
                {': Very unnatural and difficult to understand.'}
              </>
            ) : (
              <>
                <b>{'1 - Rất tệ'}</b>
                {': Cực kỳ không tự nhiên và khó hiểu.'}
              </>
            )}
          </Option>
          <Option value={2}>
            {language === 'en' ? (
              <>
                <b>{'2 - Bad'}</b>
                {': Unnatural with clarity issues.'}
              </>
            ) : (
              <>
                <b>{'2 - Tệ'}</b>
                {': Thiếu tự nhiên, nghe không rõ ràng.'}
              </>
            )}
          </Option>
          <Option value={3}>
            {language === 'en' ? (
              <>
                <b>{'3 - Normal'}</b>
                {': Mostly clear with minor unnatural elements.'}
              </>
            ) : (
              <>
                <b>{'3 - Bình thường'}</b>
                {': Tương đối rõ ràng nhưng có phần không tự nhiên.'}
              </>
            )}
          </Option>
          <Option value={4}>
            {language === 'en' ? (
              <>
                <b>{'4 - Good'}</b>
                {': Natural and clear with slight imperfections.'}
              </>
            ) : (
              <>
                <b>{'4 - Tốt'}</b>
                {': Nghe tự nhiên, rõ ràng nhưng vẫn có một số nhược điểm nhỏ.'}
              </>
            )}
          </Option>
          <Option value={5}>
            {language === 'en' ? (
              <>
                <b>{'5 - Very Good'}</b>
                {': Completely natural, like a human speaker.'}
              </>
            ) : (
              <>
                <b>{'5 - Rất tốt'}</b>
                {': Hoàn toàn tự nhiên, nghe như thật.'}
              </>
            )}
          </Option>
        </Select>
      </Form.Item>
    </Card>
  );
};

export default AudioCard;
