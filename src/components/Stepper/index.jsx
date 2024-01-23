import { Container } from './styles'
import { Minus, Plus } from '@phosphor-icons/react'

export function Stepper() {
  return (
    <Container>
      <Minus />
      <h1>01</h1>
      <Plus />
    </Container>
  )
}
