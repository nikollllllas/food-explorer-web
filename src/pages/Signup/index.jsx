import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Container, Form } from './styles'

export function SignUp() {
  return (
    <Container>
      <div>
        <img
          src={logo}
          alt={'Logo Food Explorer'}
        />
        <h1>food explorer</h1>
      </div>

      <Form>
        <h1>Crie sua conta</h1>

        <div>
          <label>Seu nome</label>
          <Input
            type={'text'}
            placeholder={'Ex.: Teste de Souza'}
            label={'Seu nome'}
          />
        </div>

        <div>
          <label>Email</label>
          <Input
            type={'email'}
            placeholder={'Ex.: exemplo@exemplo.com'}
            label={'Email'}
          />
        </div>

        <div>
          <label>Senha</label>
          <Input
            type={'password'}
            placeholder={'Sua senha'}
            label={'Senha'}
          />
        </div>

        <Button title='Entrar' />
        <Link to={'/'}>Já tenho uma conta</Link>
      </Form>
    </Container>
  )
}
