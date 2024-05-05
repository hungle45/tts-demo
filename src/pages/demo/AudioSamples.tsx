import { Tabs, Typography } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import Title from 'antd/es/typography/Title';
import './audioSample.css';

const { Text } = Typography;

export interface AudioTab {
  label: string;
  transcript: string;
  headers: string[];
  rows: {
    speakerId: string;
    audios: string[];
  }[];
}

const AudioSamples: React.FC<{
  title: string;
  description: string;
  audioTabs: AudioTab[];
}> = ({ title, description, audioTabs }) => {
  return (
    <>
      <Title level={4} style={{ marginTop: 0 }}>
        {title}
      </Title>

      <Paragraph style={{ textAlign: 'justify' }}>{description}</Paragraph>

      <Tabs
        type="card"
        size="middle"
        items={audioTabs.map(({ label, transcript, headers, rows }, tabKey) => ({
          label: label,
          key: tabKey.toString(),
          children: (
            <>
              Transcript:{' '}
              <Text italic style={{ textAlign: 'justify' }}>
                {transcript}
              </Text>
              <table className="comparison-table">
                <thead>
                  <tr>
                    {headers.map((header, key) => (
                      <th key={key}>{header}</th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {rows.map(({ speakerId, audios }, key) => {
                    return (
                      <tr key={key}>
                        {audios.map((audio, key) => (
                          <td key={key}>
                            <div style={{ opacity: key === 0 ? 1 : 0 }}>
                              <i>{speakerId}</i>
                            </div>
                            <audio
                              controls
                              controlsList="noplaybackrate nodownload"
                              className="audio-player"
                              preload="metadata"
                              src={audio}
                            ></audio>
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </>
          ),
        }))}
      />
    </>
  );
};

export default AudioSamples;
