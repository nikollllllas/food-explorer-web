import styled from 'styled-components'

export const Container = styled.div`
  padding: 2.4rem 12.3rem;

  height: auto;
  width: auto;

  display: flex;
  align-items: center;
  gap: 3.2rem;

  background-color: ${({ theme }) => theme.darkTheme.DARK[600]};

  > div {
    display: flex;
    flex-direction: column;
    align-items: end;
  }

  > div h1 {
    font-size: 2.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.darkTheme.LIGHT[100]};
  }

  > div span {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.darkTheme.TINTS.CAKE[200]};
  }

  > svg {
    width: 32px;
    height: 32px;
    color: ${({ theme }) => theme.darkTheme.LIGHT[100]};

    :nth-last-child() {
      cursor: pointer;
    }
  }
`
export const Search = styled.div`
  width: 60%;
  display: flex;
  border-radius: 0.3rem;
  background-color: ${({ theme }) => theme.darkTheme.DARK[900]};
  justify-content: center;
`
