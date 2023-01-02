import { BaseParagraph } from 'common/styles/baseComponents';
import styled, { css } from 'styled-components';

export const SuccessContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;
`;

export const SuccessIconWrapper = styled.div<{ $isSuccess: boolean }>`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: ${({ theme, $isSuccess }) =>
    $isSuccess ? theme.colors.success[300] : theme.colors.danger[300]};
  position: relative;
`;

export const StyledMessage = styled(BaseParagraph)`
  text-align: center;
`;

export const iconStyles = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
