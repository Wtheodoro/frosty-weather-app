import React from 'react'
import { Button, PagehigherOrderComponent } from '../../components'
import { Container } from './styles'

const Info = () => {
  return (
    <Container>
      <div>
        <p>
          Made with ❤️ by:{' '}
          <a href='https://www.walisontsx.com/' target='__blank'>
            Walison
          </a>
        </p>
      </div>

      <a href='https://www.walisontsx.com/' target='__blank'>
        <Button>me</Button>
      </a>

      <a href='https://www.youtube.com/watch?v=h_D3VFfhvs4' target='__blank'>
        <Button>Enjoy</Button>
      </a>
    </Container>
  )
}

export default PagehigherOrderComponent(Info)
