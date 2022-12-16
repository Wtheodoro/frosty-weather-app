import React from 'react'
import { PagehigherOrderComponent } from '..'
import { Button, LogoStorm, LogoRain } from '../../components'
import {
  Container,
  LogoWrapper,
  VanishLeftLogo,
  VanishRightLogo,
} from './styles'

const Welcome = () => {
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

      <h1>Discover the Weather in Your City</h1>

      <p>Get to know your weather maps and radar preciptation forecast</p>

      <Button>Get Started</Button>
    </Container>
  )
}

export default PagehigherOrderComponent(Welcome)
