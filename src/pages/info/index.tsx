import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, PagehigherOrderComponent } from '../../components'
import { useAppContext } from '../../hooks/useAppContext'
import { Container, LogoWrapper } from './styles'

const Info = () => {
  const {
    userSettingsPreferences: {
      isCountryLocationTime,
      isTemperatureInFahrenheit,
    },
  } = useAppContext()
  const navigate = useNavigate()

  return (
    <Container>
      <LogoWrapper>
        <img src='/frosty-logo.png' alt='frosty logo' />
      </LogoWrapper>

      <h3>
        Can't you find a specific city? <br />
        No problem, you can add manually on{' '}
        <span onClick={() => navigate('/chooseCity')}>Choose City</span> page.
      </h3>

      <h3>
        Do you want to see temperature in{' '}
        <span>{isTemperatureInFahrenheit ? 'Celsius' : 'Fahrenheit'}</span>?{' '}
        <br />
        Just click on the temperature in Weather on{' '}
        <span onClick={() => navigate('/home')}>Home</span> page.
      </h3>

      <h3>
        Do you want to see sunrise and sunset in{' '}
        <span>{isCountryLocationTime ? 'your location' : 'country'} </span>
        time? <br />
        Just click on the Earth icon on{' '}
        <span onClick={() => navigate('/home')}>Home</span> page.
      </h3>

      <a href='https://www.walisontsx.com/' target='__blank'>
        <Button>me</Button>
      </a>

      <div>
        <p>
          Made with ❤️ by:{' '}
          <a href='https://www.walisontsx.com/' target='__blank'>
            Walison
          </a>
        </p>
      </div>
    </Container>
  )
}

export default PagehigherOrderComponent(Info, true)
