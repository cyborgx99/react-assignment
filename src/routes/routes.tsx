import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import PageLayout from 'components/layout';
import Spinner from 'components/spinner';
import { baseRoutes } from './baseRoutes';
import { basePathKeys } from './pathKeys';
import NotFoundPage from 'pages/notFound';

const AppRoutes = () => {
  return (
    <Suspense
      fallback={
        <PageLayout>
          <Spinner type='animated' />
        </PageLayout>
      }
    >
      <Routes>
        <Route path='*' element={<NotFoundPage />} />
        <Route path={basePathKeys.HOME} element={<PageLayout />}>
          {baseRoutes.map(({ path, Component }, index) => (
            <Route path={path} key={path} index={index === 0} element={<Component />} />
          ))}
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
