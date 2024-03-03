// import { Navigate, Routes, Route } from 'react-router-dom'

import { Routes, Route } from 'react-router-dom'
import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'
import { Home } from '../pages/Home'
import { DefaultLayout } from '../layouts/defaultlayout'

export function AuthRoutes() {
  // const user = localStorage.getItem('@rocketnotes:user')

  return (
    <Routes>
      <Route
        path='/'
        element={<DefaultLayout />}
        >
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
      </Route>
    </Routes>
  )
}
