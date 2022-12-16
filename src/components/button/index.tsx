import React from 'react'
import { Container } from './styles'

interface IButton {
  children: string
  onClick?: () => void
  disabled?: boolean
}

const Button: React.FC<IButton> = ({ children, onClick, disabled }) => {
  return (
    <Container
      data-testid='button-test-id'
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Container>
  )
}

export default Button
