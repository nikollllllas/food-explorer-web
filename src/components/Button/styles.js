import styled from 'styled-components'

export const Container = styled.button`
  padding: 1.2rem 3.2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  color: ${({ theme }) => theme.darkTheme.LIGHT[100]};
  background: ${({ theme }) => theme.darkTheme.TINTS.TOMATO[100]};

  border: 0;
  border-radius: 5px;

  font: 1.4rem;
  text-align: center;

  &:hover {
    transition: 0.2s ease-in-out;
    background: ${({ theme }) => theme.darkTheme.TINTS.TOMATO[200]};
  }

  &:disabled {
    cursor: not-allowed;
    background: ${({ theme }) => theme.darkTheme.TINTS.TOMATO[400]};
  }

  > svg {
    color: ${({ theme }) => theme.darkTheme.LIGHT[100]};
    width: 32px;
    height: 32px;
  }
`
