import React from 'react'
import {
  ClearDay,
  Cloud,
  Humidity,
  Wind,
  Thunder,
  Drizzle,
  Snow,
  Sunrise,
  Moonrise,
  EarthIcon,
  ClearNight,
  CloudyNight,
  CloudyDay,
  RefreshIcon,
} from '..'
import MOCK_WEATHERS from '../../constants/weather'
import celsiusToFahrenheit from '../../helpers/celsiusToFahrenheit'
import {
  localizedPercentage,
  localizedSpeed,
  localizedTemperature,
  localizedTime,
} from '../../helpers/localizedValues'
import { IWeather } from '../../types/weather'
import {
  Container,
  MainInfoWrapper,
  SubItemsWrapper,
  SubItem,
  CityName,
  TempText,
  SubItemsSwitter,
  ClickableSubItem,
  ReloadIconWrapper,
} from './styles'

type IWeatherCard = {
  isTemperatureInFahrenheit: boolean
  toggleSettingsTempUnity: () => void
  isCountryLocationTime: boolean
  toggleSettingsLocationTime: () => void
  onUpdateWeather: (cityName: string) => void
  isWaitingNewData: boolean
} & IWeather

const WeatherCard: React.FC<IWeatherCard> = ({
  main,
  weather,
  wind,
  clouds,
  name,
  sys: { sunrise, sunset },
  timezone,
  isTemperatureInFahrenheit,
  toggleSettingsTempUnity,
  isCountryLocationTime,
  toggleSettingsLocationTime,
  onUpdateWeather,
  isWaitingNewData,
}) => {
  const currentWeather = MOCK_WEATHERS.includes(weather[0].main)
    ? weather[0].main
    : 'Clear'

  const isDay = weather[0].icon.includes('d')

  const WeatherIconManeger: { [key: string]: React.ReactNode } = {
    Clear: isDay ? <ClearDay /> : <ClearNight />,
    Thunderstorm: <Thunder />,
    Drizzle: <Drizzle />,
    Rain: <Drizzle />,
    Snow: <Snow />,
    Clouds: isDay ? <CloudyDay /> : <CloudyNight />,
  }

  const localSunrise = isCountryLocationTime
    ? localizedTime(new Date(sunrise * 1000))
    : localizedTime(new Date((sunrise - timezone) * 1000))

  const localSunset = isCountryLocationTime
    ? localizedTime(new Date(sunset * 1000))
    : localizedTime(new Date((sunset = timezone) * 1000))

  const temp = isTemperatureInFahrenheit
    ? localizedTemperature(celsiusToFahrenheit(main.temp), 'fahrenheit')
    : localizedTemperature(main.temp, 'celsius')

  return (
    <Container data-testid='weatherCard-test-id'>
      <ReloadIconWrapper
        onClick={() => onUpdateWeather(name)}
        isRotating={isWaitingNewData}
      >
        <RefreshIcon />
      </ReloadIconWrapper>

      <MainInfoWrapper>
        {WeatherIconManeger[currentWeather]}

        <CityName>{name}</CityName>

        <h2>{weather[0].description}</h2>

        <TempText onClick={toggleSettingsTempUnity}>
          {temp.slice(0, -2)}
          <span>{temp.slice(temp.length - 2)}</span>
        </TempText>
      </MainInfoWrapper>

      <SubItemsSwitter>
        <SubItemsWrapper data-testid='sunsetSunrise-test-id'>
          <SubItem>
            <Sunrise />

            <p>{localSunrise}</p>
            <p>Sunrise</p>
          </SubItem>

          <ClickableSubItem onClick={toggleSettingsLocationTime}>
            <EarthIcon />

            {isCountryLocationTime ? (
              <p>
                Country <br /> location
              </p>
            ) : (
              <p>
                My <br /> Location
              </p>
            )}
          </ClickableSubItem>

          <SubItem>
            <Moonrise />

            <p>{localSunset}</p>
            <p>Sunset</p>
          </SubItem>
        </SubItemsWrapper>

        <SubItemsWrapper data-testid='windHumidityCloudness-test-id'>
          <SubItem>
            <Wind />

            <p>Wind</p>
            <p>{localizedSpeed(wind.speed)}</p>
          </SubItem>

          <SubItem>
            <Humidity />

            <p>{localizedPercentage(main.humidity)}</p>
            <p>Humidity</p>
          </SubItem>

          <SubItem>
            <Cloud />

            <p>{localizedPercentage(clouds.all)}</p>
            <p>Cloudiness</p>
          </SubItem>
        </SubItemsWrapper>
      </SubItemsSwitter>
    </Container>
  )
}

export default WeatherCard
