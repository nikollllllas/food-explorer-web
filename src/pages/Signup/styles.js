import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  background: ${({ theme }) => theme.darkTheme.DARK[400]};

  h1 {
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

  a {
    text-align: center;
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme.darkTheme.LIGHT[100]};
  }
`

export const Form = styled.form`
  height: auto;
  width: auto;
  padding: 6.4rem;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  border-radius: 1.6rem;

  background-color: ${({ theme }) => theme.darkTheme.DARK[700]};

  div {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.8rem;
  }

  h1 {
    font-size: 3.6rem;
    font-weight: 400;
    text-align: center;
    color: ${({ theme }) => theme.darkTheme.LIGHT[100]};
  }

  label {
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme.darkTheme.LIGHT[400]};
  }
`
