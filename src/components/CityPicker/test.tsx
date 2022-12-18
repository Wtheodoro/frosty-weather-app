import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import CityPicker from '.'

const CityPickerProps = {
  children: 'city picker jest',
}

describe('<CityPicker />', () => {
  it('Should render city picker component correctly', () => {
    render(<CityPicker {...CityPickerProps} />)

    const cityPicker = screen.getByTestId('cityPicker-test-id')

    expect(cityPicker).toBeInTheDocument()
  })

  it('Should show the correct children text', () => {
    render(<CityPicker {...CityPickerProps} />)

    const cityPicker = screen.getByText(/city picker jest/i)

    expect(cityPicker).toBeInTheDocument()
  })

  it('Should call onClick function when city picker is clicked', () => {
    const mockCallBack = jest.fn()

    render(<CityPicker onClick={mockCallBack} {...CityPickerProps} />)

    const cityPicker = screen.getByTestId('cityPicker-test-id')

    fireEvent.click(cityPicker)

    expect(mockCallBack).toHaveBeenCalled()
  })

  it('Should render with unselected styles', () => {
    render(<CityPicker {...CityPickerProps} />)

    const cityPicker = screen.getByTestId('cityPicker-test-id')

    expect(cityPicker).toHaveStyle({
      color: '#0095ff',
      background: 'transparent',
    })
  })

  it('Should render with selected styles', () => {
    render(<CityPicker {...CityPickerProps} isChoosen={true} />)

    const cityPicker = screen.getByTestId('cityPicker-test-id')

    expect(cityPicker).toHaveStyle({
      color: 'white',
      background: '#0095ff',
    })
  })
})
