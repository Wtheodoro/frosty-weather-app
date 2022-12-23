import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import NavBar from '../NavBar'
import {
  Layout,
  ComponentWrapper,
  DotsWrapper,
  RedDotBlur,
  NavWrapper,
} from './styles'

const PageLayout = () => {
  const { pathname } = useLocation()
  const mustShowNavBar = pathname === '/home' || pathname === '/info'

  return (
    <Layout>
      <ComponentWrapper increseLeftMargin={mustShowNavBar}>
        <Outlet />
      </ComponentWrapper>

      <DotsWrapper>
        <RedDotBlur color='yellow' />
        <RedDotBlur color='blue' />
      </DotsWrapper>

      {mustShowNavBar && (
        <NavWrapper>
          <NavBar />
        </NavWrapper>
      )}
    </Layout>
  )
}

export default PageLayout
