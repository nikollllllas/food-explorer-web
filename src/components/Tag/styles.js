import styled from 'styled-components'

export const Container = styled.button`
  padding: 4px 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.darkTheme.LIGHT[100]};
  background: ${({ theme }) => theme.darkTheme.DARK[1000]};

  border: 0;
  border-radius: 5px;

  font: 14px 'Poppins', sans-serif;
`
