import React from 'react'
import { Container } from './styles'

interface ICustomButton {
  children: string
  onClick?: () => void
  disabled?: boolean
}

const CustomButton: React.FC<ICustomButton> = ({
  children,
  onClick,
  disabled,
}) => {
  return (
    <Container
      data-testid='CustomButton-test-id'
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Container>
  )
}

export default CustomButton
