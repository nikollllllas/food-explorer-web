import styled from 'styled-components'

export const Container = styled.div`
  padding: 0.75rem 0;
  width: 344px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 0.875rem;

  background-color: ${({ theme }) => theme.darkTheme.DARK[900]};
  color: ${({ theme }) => theme.darkTheme.LIGHT[500]};

  > input {
    width: 100%;
    font-size: 16px;
    padding: 1rem 0.75rem;
    outline: none;

    background: transparent;
    border: 0;

    color: ${({ theme }) => theme.darkTheme.LIGHT[500]};

    &::placeholder {
      color: ${({ theme }) => theme.darkTheme.LIGHT[500]};
    }
  }

  > svg {
    margin-left: 1rem;
    font-size: 24px;
    color: ${({ theme }) => theme.darkTheme.LIGHT[400]};
  }
`
