import { Button } from '../../components/Button'
import { Tag } from '../../components/Tag'
import { Stepper } from '../../components/Stepper'
import { Container } from './styles'
import { Receipt } from '@phosphor-icons/react'

export function SignIn() {
  return (
    <Container>
      <Button title={'Incluir'} />

      <Button
        title={'Incluir'}
        disabled
      />

      <Button 
        icon={Receipt}
        title={'Meu pedido (0)'}
      />

      <Tag title={'Ingrediente'} />

      <Stepper />
    </Container>
  )
}
