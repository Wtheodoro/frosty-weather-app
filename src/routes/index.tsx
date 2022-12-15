import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { Home, Welcome } from '../pages'

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/welcome' element={<Welcome />} />
      <Route path='/' element={<Home />} />
    </Routes>
  </BrowserRouter>
)

export default AppRoutes
