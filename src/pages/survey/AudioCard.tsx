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
          <Option value={1}>1 - Very bad</Option>
          <Option value={2}>2 - Bad</Option>
          <Option value={3}>3 - Normal</Option>
          <Option value={4}>4 - Good</Option>
          <Option value={5}>5 - Very Good</Option>
        </Select>
      </Form.Item>
    </Card>
  );
};

export default AudioCard;
