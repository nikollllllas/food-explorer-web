import { FooterContainer, LogoContainer } from './styles'
import logo from '../../assets/logo-gray.svg'

export function Footer() {
  return (
    <FooterContainer>
      <LogoContainer>
        <img src={logo} />
        <p>food explorer</p>
      </LogoContainer>

      <span>© 2024. All rights reserved.</span>
    </FooterContainer>
  )
}
