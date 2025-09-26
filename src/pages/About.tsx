import React from 'react';
import { Card, Button, Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const About: React.FC = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <Card>
        <Title level={1}>关于我们</Title>
        <Paragraph>
          这是关于页面的内容。你可以在这里添加更多信息。
        </Paragraph>
        <div style={{ marginTop: '20px' }}>
          <Link to="/">
            <Button type="default">
              返回首页
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default About;
