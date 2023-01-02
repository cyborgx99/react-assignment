import { BaseHeaderTwo, BaseParagraph } from 'common/styles/baseComponents';
import Button from 'components/button';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { basePathKeys } from 'routes/pathKeys';
import { PageWrapper, PageContent } from './styles';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate(basePathKeys.HOME);
  };

  return (
    <PageWrapper>
      <PageContent>
        <BaseHeaderTwo>404</BaseHeaderTwo>
        <BaseParagraph>The page has not been found</BaseParagraph>
        <Button text='Go Home' onClick={goHome} />
      </PageContent>
    </PageWrapper>
  );
};

export default NotFoundPage;
