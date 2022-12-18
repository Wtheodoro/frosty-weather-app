import React from 'react'
import { Container } from './styles'

interface ICityPicker {
  children: string
  onClick?: () => void
  isChoosen?: boolean
}

const CityPicker: React.FC<ICityPicker> = ({
  children,
  onClick,
  isChoosen,
}) => (
  <Container
    data-testid='cityPicker-test-id'
    onClick={onClick}
    isChoosen={isChoosen}
  >
    {children}
  </Container>
)

export default CityPicker
