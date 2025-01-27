'use client';

import { PageLayout } from '@/widgets/page-layout';
import { Flex, theme } from 'antd';
import { PasswordResetForm } from '@/features/auth';

export default function Reset() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <PageLayout>
      <Flex
        justify="center"
        align="center"
        style={{
          background: colorBgContainer,
          padding: 100,
          borderRadius: borderRadiusLG,
        }}
      >
        <PasswordResetForm />
      </Flex>
    </PageLayout>
  );
}
