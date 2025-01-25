'use client';

import { PageLayout } from '@/widgets/page-layout';
import { theme } from 'antd';

export default function Report() {
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
        test1
      </div>
    </PageLayout>
  );
}
