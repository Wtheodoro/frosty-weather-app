import { screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import PagehigherOrderComponent from '.'
import { renderWithRoute } from '../../utils/tests/renderWithRoute'

const TestComponent = PagehigherOrderComponent(() => {
  return <div data-testid='wrappedByHoc-test-id'>TestComponent</div>
})

const TestComponentWithNavBar = PagehigherOrderComponent(() => {
  return <div>TestComponent</div>
}, true)

describe('<Higher Order component />', () => {
  it('Should render Higher Order component page correctly', () => {
    renderWithRoute(<TestComponent />)

    const wrappedByHoc = screen.getByTestId('wrappedByHoc-test-id')

    expect(wrappedByHoc).toBeInTheDocument()
  })

  it('Should render Higher Order component page with nav bar', () => {
    renderWithRoute(<TestComponentWithNavBar />)

    const wrappedByHoc = screen.getByTestId('navBar-test-id')

    expect(wrappedByHoc).toBeInTheDocument()
  })
})
