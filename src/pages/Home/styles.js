import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;

  background: ${({ theme }) => theme.darkTheme.DARK[400]};

  p {
    font-size: 3.6rem;
    font-weight: 700;
    color: ${({ theme }) => theme.darkTheme.LIGHT[100]};
  }

  > img {
    height: 3.6rem;
  }

`
