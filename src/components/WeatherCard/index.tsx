import React, { useEffect, useState } from 'react'
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
import { ISetSetting, ISettings } from '../../types/settings'
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
  userSettings: ISettings
  setUserPreferences: ISetSetting
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
  userSettings,
  onUpdateWeather,
  isWaitingNewData,
  setUserPreferences,
}) => {
  const [isRefreshIconRotating, setIsRefreshIconRotationg] =
    useState<boolean>(false)
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

  const localSunrise = userSettings.isCountryLocationTime
    ? localizedTime(new Date(sunrise * 1000))
    : localizedTime(new Date((sunrise + timezone) * 1000))

  const localSunset = userSettings.isCountryLocationTime
    ? localizedTime(new Date(sunset * 1000))
    : localizedTime(new Date((sunset + timezone) * 1000))

  const temp = userSettings.isTemperatureInFahrenheit
    ? localizedTemperature(celsiusToFahrenheit(main.temp), 'fahrenheit')
    : localizedTemperature(main.temp, 'celsius')

  useEffect(() => {
    if (isWaitingNewData) return setIsRefreshIconRotationg(true)

    const timer = setTimeout(() => {
      setIsRefreshIconRotationg(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [isWaitingNewData])

  return (
    <Container data-testid='weatherCard-test-id'>
      <ReloadIconWrapper
        onClick={() => {
          if (!isWaitingNewData) onUpdateWeather(name)
        }}
        isRotating={isRefreshIconRotating}
      >
        <RefreshIcon />
        <span>Refresh</span>
      </ReloadIconWrapper>

      <MainInfoWrapper>
        {WeatherIconManeger[currentWeather]}

        <CityName>{name}</CityName>

        <h2>{weather[0].description}</h2>

        <TempText onClick={setUserPreferences.toggleTemperatureUnit}>
          {isRefreshIconRotating ? '-' : temp.slice(0, -2)}
          <span>{temp.slice(temp.length - 2)}</span>
        </TempText>
      </MainInfoWrapper>

      <SubItemsSwitter>
        <SubItemsWrapper data-testid='sunsetSunrise-test-id'>
          <SubItem>
            <Sunrise />

            <p>{isRefreshIconRotating ? '-' : localSunrise}</p>
            <p>Sunrise</p>
          </SubItem>

          <ClickableSubItem onClick={setUserPreferences.toggleTimeLocation}>
            <EarthIcon />

            {userSettings.isCountryLocationTime ? (
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

            <p>{isRefreshIconRotating ? '-' : localSunset}</p>
            <p>Sunset</p>
          </SubItem>
        </SubItemsWrapper>

        <SubItemsWrapper data-testid='windHumidityCloudness-test-id'>
          <SubItem>
            <Wind />

            <p>Wind</p>
            <p>{isRefreshIconRotating ? '-' : localizedSpeed(wind.speed)}</p>
          </SubItem>

          <SubItem>
            <Humidity />

            <p>
              {isRefreshIconRotating
                ? '-'
                : localizedPercentage(main.humidity / 100)}
            </p>
            <p>Humidity</p>
          </SubItem>

          <SubItem>
            <Cloud />

            <p>
              {isRefreshIconRotating
                ? '-'
                : localizedPercentage(clouds.all / 100)}
            </p>
            <p>Cloudiness</p>
          </SubItem>
        </SubItemsWrapper>
      </SubItemsSwitter>
    </Container>
  )
}

export default WeatherCard
