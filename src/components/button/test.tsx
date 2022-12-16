import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from '.'

const ButtonProps = {
  children: 'button jest',
}

describe('<Button />', () => {
  it('Should render button component correctly', () => {
    render(<Button {...ButtonProps} />)

    const button = screen.getByTestId('button-test-id')

    expect(button).toBeInTheDocument()
  })

  it('Post must have the correct post owner name', () => {
    render(<Button {...ButtonProps} />)

    const button = screen.getByText(/button jest/i)

    expect(button).toBeInTheDocument()
  })

  it('Should call onClick function when button is clicked', () => {
    const mockCallBack = jest.fn()

    render(<Button onClick={mockCallBack} {...ButtonProps} />)

    const button = screen.getByTestId('button-test-id')

    fireEvent.click(button)

    expect(mockCallBack).toHaveBeenCalled()
  })
})
