import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  background: ${({ theme }) => theme.darkTheme.DARK[400]};

  p {
    font-size: 3.6rem;
    font-weight: 700;
    color: ${({ theme }) => theme.darkTheme.LIGHT[100]};
  }

  > img {
    height: 3.6rem;
  }

  > div {
    display: flex;
    gap: 1.6rem;

    align-items: center;
    justify-content: center;
  }
`
