import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import WeatherCard from '.'

const WeatherCardProps = {
  coord: {
    lon: 139.6917,
    lat: 35.6895,
  },
  weather: [
    {
      id: 801,
      main: 'Clouds',
      description: 'few clouds',
      icon: '02d',
    },
  ],
  base: 'stations',
  main: {
    temp: 2.89,
    feels_like: -1.1,
    temp_min: -2.42,
    temp_max: 4.19,
    pressure: 1014,
    humidity: 38,
  },
  visibility: 10000,
  wind: {
    speed: 4.63,
    deg: 260,
  },
  clouds: {
    all: 20,
  },
  dt: 1671402420,
  sys: {
    type: 2,
    id: 268395,
    country: 'JP',
    sunrise: 1671399951,
    sunset: 1671435018,
  },
  timezone: 32400,
  id: 1850144,
  name: 'Tokyo',
  cod: 200,
  userSettings: {
    isCountryLocationTime: false,
    isTemperatureInFahrenheit: false,
  },
  onUpdateWeather: () => {},
  isWaitingNewData: false,
  setUserPreferences: {
    toggleTemperatureUnit: () => {},
    toggleTimeLocation: () => {},
  },
}

const roundTemperatureValue = (temp: number) => Math.round(temp)

describe('<CityPicker />', () => {
  it('Should render weather card component correctly', () => {
    render(<WeatherCard {...WeatherCardProps} />)

    const weatherCard = screen.getByTestId('weatherCard-test-id')

    expect(weatherCard).toBeInTheDocument()
  })

  it('Should render weather city', () => {
    render(<WeatherCard {...WeatherCardProps} />)

    const weatherCard = screen.getByText(/Tokyo/i)

    expect(weatherCard).toBeInTheDocument()
  })

  it('Should render weather description', () => {
    render(<WeatherCard {...WeatherCardProps} />)

    const weatherCard = screen.getByText(/few clouds/i)

    expect(weatherCard).toBeInTheDocument()
  })

  it('Should render weather with temperature in Celsius', () => {
    render(<WeatherCard {...WeatherCardProps} />)

    const temp = screen.getByText(roundTemperatureValue(2.89))
    const unity = screen.getByText(/°C/i)

    expect(temp).toBeInTheDocument()
    expect(unity).toBeInTheDocument()
  })

  it('Should render weather with temperature in Fahrenheit', () => {
    render(
      <WeatherCard
        {...WeatherCardProps}
        userSettings={{
          isTemperatureInFahrenheit: true,
          isCountryLocationTime: false,
        }}
      />
    )

    const temp = screen.getByText(roundTemperatureValue(37.2))
    const unity = screen.getByText(/°F/i)

    expect(temp).toBeInTheDocument()
    expect(unity).toBeInTheDocument()
  })

  it('Should render weather correct status svg, in this case cloudy day', () => {
    render(<WeatherCard {...WeatherCardProps} />)

    const weatherCard = screen.getByTestId('cloudyDay-test-id')

    expect(weatherCard).toBeInTheDocument()
  })

  it('Should render sunset and sunrise at first', () => {
    render(<WeatherCard {...WeatherCardProps} />)

    const sunset = screen.getByTestId('sunsetSunrise-test-id')
    const sunrise = screen.getByTestId('windHumidityCloudness-test-id')

    expect(sunset).toHaveStyle({
      'z-index': 10,
    })

    expect(sunrise).toHaveStyle({
      'z-index': 0,
    })
  })
})
