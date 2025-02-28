'use client';

import { PageLayout } from '@/widgets/page-layout';
import { Flex, theme } from 'antd';
import { SignInForm } from '@/features/auth';

export default function Signin() {
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
        <SignInForm />
      </Flex>
    </PageLayout>
  );
}
