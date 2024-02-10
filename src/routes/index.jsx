import { BrowserRouter } from 'react-router-dom'
import { AuthRoutes } from './auth.routes'

export function Routes() {
  // const user = localStorage.getItem('@rocketnotes:user')

  return (
    <BrowserRouter>
      <AuthRoutes />
    </BrowserRouter>
  )
}
