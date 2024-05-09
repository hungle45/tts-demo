import { Card, Form, Select, Typography } from 'antd';
import { AudioType } from './dto.tsx';

const { Text } = Typography;
const { Option } = Select;

const AudioCard: React.FC<{ audioKey: number; audio: AudioType }> = ({
  audioKey,
  audio,
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
        preload="auto"
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
            <>
              <b>1</b>: Very bad (very unnatural and difficult to understand) - Rất tệ
              (cực kỳ không tự nhiên và khó hiểu).
            </>
          </Option>
          <Option value={2}>
            <>
              <b>2</b>: Bad (Unnatural with clarity issues) - Tệ (Thiếu tự nhiên, nghe
              không rõ ràng).
            </>
          </Option>
          <Option value={3}>
            <>
              <b>3</b>: Normal (Mostly clear with minor unnatural elements) - Bình thường
              (Tương đối rõ ràng nhưng có phần không tự nhiên).
            </>
          </Option>
          <Option value={4}>
            <>
              <b>4</b>: Good (Natural and clear with slight imperfections) - Tốt (Nghe tự
              nhiên, rõ ràng nhưng vẫn có một số nhược điểm nhỏ).
            </>
          </Option>
          <Option value={5}>
            <>
              <b>5</b>: Very Good (Completely natural, like a human speaker) - Rất tốt
              (Hoàn toàn tự nhiên, nghe như thật).
            </>
          </Option>
        </Select>
      </Form.Item>
    </Card>
  );
};

export default AudioCard;
