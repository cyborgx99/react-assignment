import React from 'react';
import { Outlet } from 'react-router-dom';
import PageFooter from '../pageFooter';
import PageHeader from '../pageHeader';
import { PageContainer, PageContent } from './styles';
import { LayoutPageProps } from './types';

const PageLayout = ({ children }: LayoutPageProps) => {
  return (
    <PageContainer>
      <PageHeader />
      <PageContent>{children ? children : <Outlet />}</PageContent>
      <PageFooter />
    </PageContainer>
  );
};

export default PageLayout;
