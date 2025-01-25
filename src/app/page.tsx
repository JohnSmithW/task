'use client';

import { PageLayout } from '@/widgets/page-layout';
import { theme } from 'antd';

export default function Home() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <PageLayout header={null}>
      <div
        style={{
          background: colorBgContainer,
          minHeight: 280,
          padding: 24,
          borderRadius: borderRadiusLG,
        }}
      >
        Content
      </div>
    </PageLayout>
  );
}
