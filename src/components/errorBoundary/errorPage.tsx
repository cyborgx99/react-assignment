import { BaseHeaderTwo, BaseParagraph } from 'common/styles/baseComponents';
import Button from 'components/button';
import { PageContent, PageWrapper } from 'pages/notFound/styles';
import React from 'react';

import { ErrorPagePropsInterface } from './types';

const ErrorPage = ({ reload }: ErrorPagePropsInterface) => {
  return (
    <PageWrapper>
      <PageContent>
        <BaseHeaderTwo>Something went wrong</BaseHeaderTwo>
        <BaseParagraph>
          An error has occurred. In some cases, reloading the page can resolve the issue. If the
          error persists, please contact us.
        </BaseParagraph>
        <Button text='Reload' onClick={reload} />
      </PageContent>
    </PageWrapper>
  );
};

export default ErrorPage;
