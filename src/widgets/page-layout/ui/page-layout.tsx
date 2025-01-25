'use client';
import React from 'react';
import { Flex, Layout } from 'antd';

const { Content } = Layout;

export interface IPageLayoutProps {
  header?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

const layoutStyle = {
  overflow: 'hidden',
  width: '100%',
};

const layoutContentStyle = (isHeader: boolean) => ({
  width: '100%',
  padding: isHeader ? '0' : '48px 0 0 0',
  display: 'flex',
  justifyContent: 'center',
});

export const PageLayout = ({ header, children, footer }: IPageLayoutProps) => {
  return (
    <Flex
      justify="center"
      align={`${header ? 'start' : 'center'}`}
      style={{
        background: '#f5f5f5',
        height: '100svh',
      }}
    >
      <Layout style={layoutStyle}>
        {header && header}
        <Content style={layoutContentStyle(!!header)}>{children}</Content>
        {footer && footer}
      </Layout>
    </Flex>
  );
};
