import styled from 'styled-components'

export const Container = styled.div`
  padding: 2.4rem 12.3rem;

  max-height: 10.4rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.darkTheme.DARK[600]};

  :nth-last-child() {
    cursor: pointer;
  }

  svg {
    color: ${({ theme }) => theme.darkTheme.LIGHT[100]};
    cursor: pointer;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: end;
  gap: 1.6rem;

  div {
    display: flex;
    flex-direction: column;
    text-align: right;
  }

  h1 {
    font-size: 2.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.darkTheme.LIGHT[100]};
  }

  span {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.darkTheme.TINTS.CAKE[200]};
  }
`

export const Search = styled.div`
  height: 4.8rem;
  max-width: 64rem;
  display: flex;
  flex: 1;
  border-radius: 0.3rem;
  background-color: ${({ theme }) => theme.darkTheme.DARK[900]};
  justify-content: center;
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`
