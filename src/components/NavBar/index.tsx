import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import CardsIcon from '../icons/CardsIcon'
import CoffeIcon from '../icons/CoffeIcon'
import HomeIcon from '../icons/HomeIcon'
import LogoutIcon from '../icons/LogoutIcon'
import { Container, IconWrapper, LogoWrapper } from './styles'

const NavBar = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <Container data-testid='navBar-test-id'>
      <LogoWrapper>
        <img src='/frosty-logo.png' alt='frosty logo' />
      </LogoWrapper>

      <IconWrapper
        onClick={() => navigate('/home')}
        active={pathname === '/home'}
      >
        <HomeIcon />
      </IconWrapper>
      <IconWrapper
        onClick={() => navigate('/chooseCity')}
        active={pathname === '/chooseCity'}
      >
        <CardsIcon />
      </IconWrapper>
      <IconWrapper
        onClick={() => navigate('/info')}
        active={pathname === '/info'}
      >
        <CoffeIcon />
      </IconWrapper>
      <IconWrapper onClick={() => navigate('/')} active={pathname === '/'}>
        <LogoutIcon />
      </IconWrapper>
    </Container>
  )
}

export default NavBar
