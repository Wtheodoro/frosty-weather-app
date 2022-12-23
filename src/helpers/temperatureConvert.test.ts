import celsiusToFahrenheit from './celsiusToFahrenheit'

describe('Temperature Convert', () => {
  it('Should convert 15 degrees calsius to 59 degrees fahrenheint unit correctly', () => {
    const tempInFahrenheit = celsiusToFahrenheit(15)
    expect(tempInFahrenheit).toBe(59)
  })

  it('Should convert 0 degrees calsius to 32 degrees fahrenheint unit correctly', () => {
    const tempInFahrenheit = celsiusToFahrenheit(0)
    expect(tempInFahrenheit).toBe(32)
  })

  it('Should convert -10 degrees calsius to 15 degrees fahrenheint unit correctly', () => {
    const tempInFahrenheit = celsiusToFahrenheit(-10)
    expect(tempInFahrenheit).toBe(14)
  })
})
