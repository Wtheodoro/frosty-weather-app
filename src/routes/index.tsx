import React, { Suspense } from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { PageLayout } from '../components'
import FallbackPage from '../pages/FallbackPage'

const Home = React.lazy(() => import('../pages/home'))
const Welcome = React.lazy(() => import('../pages/welcome'))
const ChooseCity = React.lazy(() => import('../pages/chooseCity'))
const Info = React.lazy(() => import('../pages/info'))

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageLayout />}>
          <Route
            path=''
            element={
              <Suspense fallback={<FallbackPage />}>
                <Welcome />
              </Suspense>
            }
          />

          <Route
            path='home'
            element={
              <Suspense fallback={<FallbackPage />}>
                <Home />
              </Suspense>
            }
          />

          <Route
            path='chooseCity'
            element={
              <Suspense fallback={<FallbackPage />}>
                <ChooseCity />
              </Suspense>
            }
          />

          <Route
            path='info'
            element={
              <Suspense fallback={<FallbackPage />}>
                <Info />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
