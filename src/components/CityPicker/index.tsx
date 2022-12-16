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
  <Container onClick={onClick} isChoosen={isChoosen}>
    {children}
  </Container>
)

export default CityPicker
