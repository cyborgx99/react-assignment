import ErrorBoundary from 'components/errorBoundary';
import React, { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import PageFooter from '../pageFooter';
import PageHeader from '../pageHeader';
import { ScrollRefContext } from './scrollRefContext';
import { PageContainer, PageContent } from './styles';
import { LayoutPageProps } from './types';

const PageLayout = ({ children }: LayoutPageProps) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  return (
    <ErrorBoundary>
      <PageContainer>
        <PageHeader />
        <ScrollRefContext.Provider value={{ scrollRef }}>
          <PageContent ref={scrollRef}>{children ? children : <Outlet />}</PageContent>
        </ScrollRefContext.Provider>
        <PageFooter />
      </PageContainer>
    </ErrorBoundary>
  );
};

export default PageLayout;
