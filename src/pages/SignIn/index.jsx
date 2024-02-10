import logo from '../../assets/logo.svg'
import { Button } from '../../components/Button'
import { Container, Form } from './styles'
import { Input } from '../../components/Input'
import { Link } from 'react-router-dom'

export function SignIn() {
  return (
    <Container>
      <div>
        <img
          src={logo}
          alt={'Logo FoodExplorer'}
        />
        <h1>food explorer</h1>
      </div>
      <Form>
        <h1>Faça login</h1>

        <div>
          <label>Email</label>
          <Input
            type={'email'}
            placeholder={'Ex.: test@email.com'}
            label={'Email'}
          />
        </div>

        <div>
          <label>Senha</label>
          <Input
            type={'password'}
            placeholder={'Insira sua senha'}
            label={'Senha'}
          />
        </div>

        <Button title={'Entrar'} />
        <Link to={'/register'}>Criar uma conta</Link>
      </Form>
    </Container>
  )
}
