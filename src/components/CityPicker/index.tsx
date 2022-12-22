import React from 'react'
import { Wrapper } from './styles'

interface ICityPicker {
  children: string
  onClick: () => void
  isChoosen?: boolean
  disabled?: boolean
}

const CityPicker: React.FC<ICityPicker> = ({
  children,
  onClick,
  isChoosen,
  disabled,
}) => {
  const handleClick = () => {
    if (disabled) return
    onClick()
  }

  return (
    <Wrapper
      data-testid='cityPicker-test-id'
      onClick={handleClick}
      isChoosen={isChoosen}
    >
      {children}
    </Wrapper>
  )
}

export default CityPicker
