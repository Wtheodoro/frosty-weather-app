import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Button,
  LogoStorm,
  LogoRain,
  PagehigherOrderComponent,
} from '../../components'
import { useAppContext } from '../../hooks/useAppContext'
import {
  Container,
  LogoWrapper,
  VanishLeftLogo,
  VanishRightLogo,
} from './styles'

const Welcome = () => {
  const navigate = useNavigate()
  const { choosenCitiesNames } = useAppContext()

  const pushToApp = () => {
    if (choosenCitiesNames.length) return navigate('/home')

    navigate('/chooseCity')
  }

  return (
    <Container>
      <div>
        <LogoWrapper>
          <VanishLeftLogo>
            <LogoStorm />
          </VanishLeftLogo>

          <VanishRightLogo>
            <LogoRain />
          </VanishRightLogo>
        </LogoWrapper>
      </div>

      <h1>
        Discover the Weather in Your City with <span>Frosty</span>
      </h1>

      <p>Get to know your weather maps and radar preciptation forecast</p>

      <Button onClick={pushToApp}>Get Started</Button>
    </Container>
  )
}

export default PagehigherOrderComponent(Welcome)
