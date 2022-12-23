import React from 'react'
import { useLocation } from 'react-router-dom'
import { useAppContext } from '../../hooks/useAppContext'
import CardsIcon from '../icons/CardsIcon'
import CoffeIcon from '../icons/CoffeIcon'
import HomeIcon from '../icons/HomeIcon'
import LogoutIcon from '../icons/LogoutIcon'
import { Container, IconWrapper, LogoWrapper } from './styles'

const NavBar = () => {
  const { pathname } = useLocation()

  const { resetAllData } = useAppContext()

  return (
    <Container data-testid='navBar-test-id'>
      <LogoWrapper>
        <img src='/frosty-logo.png' alt='frosty logo' />
      </LogoWrapper>

      <IconWrapper to='/home' active={pathname === '/home' ? 'true' : 'false'}>
        <HomeIcon />
      </IconWrapper>

      <IconWrapper
        to='/chooseCity'
        active={pathname === '/chooseCity' ? 'true' : 'false'}
      >
        <CardsIcon />
      </IconWrapper>

      <IconWrapper to='/info' active={pathname === '/info' ? 'true' : 'false'}>
        <CoffeIcon />
      </IconWrapper>

      <IconWrapper
        to='/'
        active={pathname === '/' ? 'true' : 'false'}
        onClick={resetAllData}
      >
        <LogoutIcon />
      </IconWrapper>
    </Container>
  )
}

export default NavBar
