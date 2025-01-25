'use client';

import { Layout } from 'antd';
import { useUserStore } from '@/enteties/user/store';

const { Header } = Layout;

export const PageHeader = (): React.ReactElement => {
  const user = useUserStore.getState().user;

  return <Header style={{ display: 'flex', alignItems: 'center' }}>{user && user.name}</Header>;
};
