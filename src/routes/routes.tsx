import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageLayout from 'components/layout';
import Spinner from 'components/spinner';
import { baseRoutes } from './baseRoutes';
import { basePathKeys } from './pathKeys';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <PageLayout>
            <Spinner type='animated' />
          </PageLayout>
        }
      >
        <Routes>
          <Route path={basePathKeys.HOME} element={<PageLayout />}>
            {baseRoutes.map(({ path, Component }, index) => (
              <Route path={path} key={path} index={index === 0} element={<Component />} />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
