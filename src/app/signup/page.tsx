'use client';

import { SignUpForm } from '@/features/auth';
import { PageLayout } from '@/widgets/page-layout';
import { Flex, theme } from 'antd';

export default function Report() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <PageLayout header={null}>
      <Flex
        justify="center"
        align="center"
        style={{
          background: colorBgContainer,

          padding: 100,
          borderRadius: borderRadiusLG,
        }}
      >
        <SignUpForm />
      </Flex>
    </PageLayout>
  );
}
