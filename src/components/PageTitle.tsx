import { Typography } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import Title from 'antd/es/typography/Title';

const { Text } = Typography;

const PageTitle: React.FC<{ title: string; subTitle?: string }> = ({
  title,
  subTitle,
}) => {
  return (
    <>
      <Title level={2} style={{ marginBottom: 0 }}>
        {title}
      </Title>
      {subTitle && (
        <Paragraph>
          <Text type="secondary" strong style={{ marginBottom: 12 }}>
            {subTitle}
          </Text>
        </Paragraph>
      )}
    </>
  );
};

export default PageTitle;
