import { Container } from './styles'

export function Input({ icon: Icon, ...rest }) {
  return (
    <Container>
      {Icon && <Icon />}
      <input type='' {...rest} />
    </Container>
  )
}
