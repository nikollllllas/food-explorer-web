import styled from 'styled-components'

export const Container = styled.button`
  padding: 1rem 3rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  color: ${({ theme }) => theme.darkTheme.LIGHT[100]};
  background: ${({ theme }) => theme.darkTheme.TINTS.TOMATO[100]};

  border: 0;
  border-radius: 5px;

  font: 14px 'Poppins', sans-serif;

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
