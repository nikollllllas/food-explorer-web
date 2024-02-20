import { Container, Search } from './styles'
import { Button } from '../Button'
import { MagnifyingGlass, Receipt, SignOut } from '@phosphor-icons/react'
import { Input } from '../Input'

export function Header({ isAdmin }) {
  return (
    <Container>
      <svg
        width='26'
        height='31'
        viewBox='0 0 26 31'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M13 0.366394L25.9904 7.86639V22.8664L13 30.3664L0.00961876 22.8664V7.86639L13 0.366394Z'
          fill='#065E7C'
        />
      </svg>

      <div>
        <h1>food explorer </h1>
        {isAdmin ? <span>Admin</span> : ''}
      </div>

      <Search>
        <Input
          icon={MagnifyingGlass}
          isAdmin={false}
          placeholder={'Busque por pratos ou ingredientes'}
        />
      </Search>

      {isAdmin ? <Button title={'Novo prato'} /> : <Button icon={Receipt} />}

      <SignOut />
    </Container>
  )
}
