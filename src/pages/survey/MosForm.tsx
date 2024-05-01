import { Button, Form, FormProps, Input } from 'antd';
import { audioAssets } from '../../assets/assets.tsx';
import {
  AUDIO_NAME_DELIMITER,
  AUDIO_PER_MODEL,
  USER_INFO_KEY,
} from '../../configs/SurveyAudioConfig.tsx';
import { getRandomElements, shuffleArray } from '../../utils/randomUtils.ts';
import AudioCard from './AudioCard.tsx';
import { AudioMapType } from './dto.tsx';

const getAudioKey = (
  model: string,
  audioFile: string,
  delimiter: string = AUDIO_NAME_DELIMITER
) => {
  return `${model}${delimiter}${audioFile}`;
};

const mapAudioAssets = () => {
  const audioMap: AudioMapType = {};

  for (const model in audioAssets) {
    const audioFiles = audioAssets[model];
    const audioKeys = Object.keys(audioFiles);

    getRandomElements(audioKeys, AUDIO_PER_MODEL).forEach((audioKey) => {
      const audioFile = audioFiles[audioKey];
      const key = getAudioKey(model, audioKey);
      audioMap[key] = audioFile;
    });
  }
  return audioMap;
};

const MosForm: React.FC = () => {
  const audioMap = mapAudioAssets();
  const randomAudioKeys = shuffleArray(Object.keys(audioMap));

  const onFinish: FormProps['onFinish'] = (values) => {
    const formData = new FormData();
    formData.append(USER_INFO_KEY.NAME, values[USER_INFO_KEY.NAME]);
    formData.append(USER_INFO_KEY.EMAIL, values[USER_INFO_KEY.EMAIL]);
    for (let index = 0; index < values.rating.length; index++) {
      formData.append(randomAudioKeys[index], values.rating[index]);
    }

    console.log('FormData:');
    for (const pair of formData.entries()) {
      console.log('    ' + pair[0] + ', ' + pair[1]);
    }
  };

  const onFinishFailed: FormProps['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      layout="vertical"
      style={{ maxWidth: 1000, margin: 'auto' }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name={USER_INFO_KEY.NAME}
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name={USER_INFO_KEY.EMAIL}
        rules={[
          { required: true, message: 'Please input your email!' },
          { type: 'email', message: 'Please input a valid email!' },
        ]}
      >
        <Input />
      </Form.Item>

      {randomAudioKeys.map((audioKey, index) => {
        return <AudioCard key={index} audioKey={index} audio={audioMap[audioKey]} />;
      })}

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default MosForm;
