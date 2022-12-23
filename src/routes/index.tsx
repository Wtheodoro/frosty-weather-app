import React, { Suspense } from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

const Home = React.lazy(() => import('../pages/home'))
const Welcome = React.lazy(() => import('../pages/welcome'))
const ChooseCity = React.lazy(() => import('../pages/chooseCity'))
const Info = React.lazy(() => import('../pages/info'))

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Welcome />
            </Suspense>
          }
        />

        <Route
          path='/home'
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          }
        />

        <Route
          path='/chooseCity'
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ChooseCity />
            </Suspense>
          }
        />

        {/* <Route
          path='/info'
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Info />
            </Suspense>
          }
        /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
