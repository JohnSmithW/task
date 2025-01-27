'use client';

import { PageLayout } from '@/widgets/page-layout';
import { Flex, theme } from 'antd';
import { PageHeader } from '../widgets/header';

export default function Home() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <PageLayout header={<PageHeader />}>
      <Flex
        justify="center"
        align="center"
        style={{
          background: colorBgContainer,
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          padding: 100,
          borderRadius: borderRadiusLG,
        }}
      >
        <h1>Home</h1>
      </Flex>
    </PageLayout>
  );
}
