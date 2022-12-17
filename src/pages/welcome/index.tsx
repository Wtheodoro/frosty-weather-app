import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CustomButton,
  LogoStorm,
  LogoRain,
  PagehigherOrderComponent,
} from '../../components'
import { usePreSet } from '../../hooks/preSet'
import {
  Container,
  LogoWrapper,
  VanishLeftLogo,
  VanishRightLogo,
} from './styles'

const Welcome = () => {
  const navigate = useNavigate()
  const { hasSomePreSettedCity } = usePreSet()

  const pushToApp = () => {
    if (hasSomePreSettedCity) return navigate('/home')

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

      <CustomButton onClick={pushToApp}>Get Started</CustomButton>
    </Container>
  )
}

export default PagehigherOrderComponent(Welcome)
