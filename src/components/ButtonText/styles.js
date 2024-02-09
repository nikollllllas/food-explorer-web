import styled from 'styled-components'

export const Container = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.darkTheme.LIGHT[100]};

  font-size: 16px;
`
