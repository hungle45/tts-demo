import {
  Button,
  Form,
  FormProps,
  Input,
  Modal,
  notification,
  Space,
  Spin,
  Typography,
} from 'antd';
import { useState } from 'react';
import { surveyAudioAssets } from '../../assets/surveyAssets.tsx';
import {
  APP_SCRIPT_URL,
  AUDIO_NAME_DELIMITER,
  AUDIO_PER_MODEL,
  USER_INFO_KEY,
} from '../../configs/SurveyAudioConfig.tsx';
import { getRandomElements, shuffleArray } from '../../utils/randomUtils.ts';
import AudioCard from './AudioCard.tsx';
import { AudioMapType } from './dto.tsx';

const { Text } = Typography;

const getAudioKey = (
  model: string,
  audioFile: string,
  delimiter: string = AUDIO_NAME_DELIMITER
) => {
  return `${model}${delimiter}${audioFile}`;
};

const mapAudioAssets = () => {
  const audioMap: AudioMapType = {};

  for (const model in surveyAudioAssets) {
    const audioFiles = surveyAudioAssets[model];
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

  const [api, contextHolder] = notification.useNotification();
  const [formDisabled, setFormDisabled] = useState<boolean>(true);
  const [spinning, setSpinning] = useState<boolean>(false);

  const handleSubmitSuccess = () => {
    setSpinning(false);
    Modal.success({
      title: 'Success',
      content: 'Thank you for your submission!',
    });
  };

  const handleSubmitFail = (error: string) => {
    setSpinning(false);
    console.error('Error:', error);
    Modal.error({
      title: 'Error',
      content: (
        <Space direction="vertical">
          <Text>Sorry, something went wrong:&lt;</Text>
          <Text>Please copy the error message below and contact the administrator:</Text>
          <Text copyable code>
            {error}
          </Text>
        </Space>
      ),
    });
    setFormDisabled(false);
  };

  const onFinish: FormProps['onFinish'] = (values) => {
    setFormDisabled(true);
    setSpinning(true);

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

    fetch(APP_SCRIPT_URL, {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        if (data.status === 1) {
          handleSubmitSuccess();
        } else {
          handleSubmitFail(data.message);
        }
      })
      .catch((error) => {
        handleSubmitFail(error.message);
      });
  };

  const onFinishFailed: FormProps['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
    api.error({
      message: 'Form submission failed',
      description: 'Please make sure you have filled in all the required fields.',
    });
  };

  return (
    <>
      {contextHolder}
      <Form
        name="basic"
        layout="vertical"
        // style={{ maxWidth: 1000, margin: 'auto' }}
        disabled={formDisabled}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Nickname"
          name={USER_INFO_KEY.NAME}
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input style={{ boxShadow: '1px 1px 8px 4px rgba(208, 216, 243, 0.4)' }} />
        </Form.Item>

        <Form.Item
          label="Email"
          name={USER_INFO_KEY.EMAIL}
          rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'Please input a valid email!' },
          ]}
        >
          <Input style={{ boxShadow: '1px 1px 8px 4px rgba(208, 216, 243, 0.4)' }} />
        </Form.Item>

        {randomAudioKeys.map((audioKey, index) => {
          return <AudioCard key={index} audioKey={index} audio={audioMap[audioKey]} />;
        })}

        <Form.Item style={{ textAlign: 'center' }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

      <Spin spinning={spinning} fullscreen />
    </>
  );
};

export default MosForm;
