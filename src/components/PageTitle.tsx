import Title from 'antd/es/typography/Title';

const PageTitle: React.FC<{ title: string; subTitle: string }> = ({
  title,
  subTitle = null,
}) => {
  return (
    <>
      <Title style={{ marginBottom: 0 }}>{title}</Title>
      {subTitle && (
        <Title level={4} type="secondary" style={{ marginTop: 0, fontWeight: 0 }}>
          {subTitle}
        </Title>
      )}
    </>
  );
};

export default PageTitle;
