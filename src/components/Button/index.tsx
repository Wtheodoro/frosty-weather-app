import React, { ButtonHTMLAttributes } from 'react'
import { Wrapper } from './styles'

type IButton = {
  styleType?: ButtonStyleType
} & ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonStyleType = 'blue' | 'white'

const Button: React.FC<IButton> = ({
  children,
  onClick,
  disabled,
  styleType = 'blue',
}) => {
  return (
    <Wrapper
      data-testid='button-test-id'
      onClick={onClick}
      disabled={disabled}
      styleType={styleType}
    >
      {children}
    </Wrapper>
  )
}

export default Button
