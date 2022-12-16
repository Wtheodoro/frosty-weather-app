import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { Home, Welcome, ChooseCity } from '../pages'

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/home' element={<Home />} />
        <Route path='/chooseCity' element={<ChooseCity />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
