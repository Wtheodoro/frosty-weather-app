import { act, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import NavBar from '.'
import { renderWithRoute } from '../../utils/tests/renderWithRoute'

describe('<NavBar />', () => {
  it('Should render nav bar component correctly', () => {
    renderWithRoute(<NavBar />)

    const navBar = screen.getByTestId('navBar-test-id')

    expect(navBar).toBeInTheDocument()
  })

  it('Should render nav bar on mobile mode by default', () => {
    renderWithRoute(<NavBar />)

    const navBar = screen.getByTestId('navBar-test-id')

    expect(navBar).toHaveStyle({
      width: '100%',
      height: '70px',
      'justify-content': 'space-evenly',
    })
  })
})
