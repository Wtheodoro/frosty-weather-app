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
import unixTimestampToLocalTime from '../../helpers/unixTimestampToLocalTime'
import unixTimestampToMyLocalTime from '../../helpers/unixTimestampToMyLocalTime'
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
    ? unixTimestampToLocalTime({
        timestamp: sunrise,
        timezone,
      })
    : unixTimestampToMyLocalTime({
        timestamp: sunrise,
      })

  const localSunset = isCountryLocationTime
    ? unixTimestampToLocalTime({
        timestamp: sunset,
        timezone,
      })
    : unixTimestampToMyLocalTime({
        timestamp: sunset,
      })

  const temp = isTemperatureInFahrenheit
    ? celsiusToFahrenheit(main.temp)
    : main.temp

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
          {Math.round(temp)}
          <span>{isTemperatureInFahrenheit ? '°F' : '°C'}</span>
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
            <p>{wind.speed} m/h</p>
          </SubItem>

          <SubItem>
            <Humidity />

            <p>{main.humidity} %</p>
            <p>Humidity</p>
          </SubItem>

          <SubItem>
            <Cloud />

            <p>{clouds.all} %</p>
            <p>Cloudiness</p>
          </SubItem>
        </SubItemsWrapper>
      </SubItemsSwitter>
    </Container>
  )
}

export default WeatherCard
