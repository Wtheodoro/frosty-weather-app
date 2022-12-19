import { screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import AddCityMenu from '.'
import { renderWithRoute } from '../../utils/tests/renderWithRoute'

const AddCityMenuProps = {
  onClose: () => {},
  isOpen: true,
}

describe('<CityPicker />', () => {
  it('Should render add city menu component correctly', () => {
    renderWithRoute(<AddCityMenu {...AddCityMenuProps} />)

    const cityPicker = screen.getByTestId('addCityMenu-test-id')

    expect(cityPicker).toBeInTheDocument()
  })
})
