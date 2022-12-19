import React from 'react'
import { Container } from './styles'

interface ICustomButton {
  children: string
  onClick?: () => void
  disabled?: boolean
  styleType?: ButtonstyleType
}

export type ButtonstyleType = 'blue' | 'white'

const CustomButton: React.FC<ICustomButton> = ({
  children,
  onClick,
  disabled,
  styleType = 'blue',
}) => {
  return (
    <Container
      data-testid='customButton-test-id'
      onClick={onClick}
      disabled={disabled}
      styleType={styleType}
    >
      {children}
    </Container>
  )
}

export default CustomButton
