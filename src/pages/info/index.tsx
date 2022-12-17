import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CustomButton, PagehigherOrderComponent } from '../../components'
import { usePreSet } from '../../hooks/preSet'
import { Container } from './styles'

const Info = () => {
  const { preSetAsFahrenheit } = usePreSet()
  const navigate = useNavigate()

  return (
    <Container>
      <h3>
        Want to see temperature in{' '}
        <span>{preSetAsFahrenheit ? 'Celsius' : 'Fahrenheit'}</span>? <br />
        Just click on the temperature in Weather on{' '}
        <span onClick={() => navigate('/home')}>Home</span> page
      </h3>

      <a href='https://www.walisontsx.com/' target='__blank'>
        <CustomButton>me</CustomButton>
      </a>

      <a href='https://www.youtube.com/watch?v=h_D3VFfhvs4' target='__blank'>
        <CustomButton>Enjoy</CustomButton>
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
