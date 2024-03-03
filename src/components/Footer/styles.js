import styled from 'styled-components'

export const FooterContainer = styled.footer`
  padding: 2.4rem 12.3rem;

  height: 10.4rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.darkTheme.DARK[600]};


  p {
    font-size: 2.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.darkTheme.LIGHT[700]};
  }

  span {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.darkTheme.LIGHT[400]};
  
  }
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`