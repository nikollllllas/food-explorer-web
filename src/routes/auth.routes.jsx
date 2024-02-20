// import { Navigate, Routes, Route } from 'react-router-dom'

import { Routes, Route } from 'react-router-dom'
import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'
import { Home } from '../pages/Home'

export function AuthRoutes() {
  // const user = localStorage.getItem('@rocketnotes:user')

  return (
    <Routes>
      <Route
        path='/'
        element={<SignIn />}
      />

      <Route
        path='/register'
        element={<SignUp />}
      />

      <Route
        path='/home'
        element={<Home />}
      />
      {/* {!user && 
        <Route
          path='*'
          element={<Navigate to={'/'} />}
        />
      } */}
    </Routes>
  )
}
