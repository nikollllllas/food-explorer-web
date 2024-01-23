import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100px;
  height: 32px;
  justify-content: center;
  align-items: center;
  gap: 14px;

  > h1 {
    color: ${({ theme }) => theme.darkTheme.LIGHT[300]};
  }

  > svg {
    cursor: pointer;
    color: ${({ theme }) => theme.darkTheme.LIGHT[100]};
  }
`