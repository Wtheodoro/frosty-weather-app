import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CustomButton, PagehigherOrderComponent } from '../../components'
import { usePreSet } from '../../hooks/preSet'
import { Container, LogoWrapper } from './styles'

const Info = () => {
  const { preSetAsFahrenheit, preSetAsCountryLocationTime } = usePreSet()
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
        <span>{preSetAsFahrenheit ? 'Celsius' : 'Fahrenheit'}</span>? <br />
        Just click on the temperature in Weather on{' '}
        <span onClick={() => navigate('/home')}>Home</span> page.
      </h3>

      <h3>
        Do you want to see sunrise and sunset in{' '}
        <span>
          {preSetAsCountryLocationTime ? 'your location' : 'country'}{' '}
        </span>
        time? <br />
        Just click on the Earth icon on{' '}
        <span onClick={() => navigate('/home')}>Home</span> page.
      </h3>

      <a href='https://www.walisontsx.com/' target='__blank'>
        <CustomButton>me</CustomButton>
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
