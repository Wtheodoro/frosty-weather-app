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
} from '..'
import MOCK_WEATHERS from '../../constants/weather'
import celsiusToFahrenheit from '../../helpers/celsiusToFahrenheit'
import unixTimestampToLocalTime from '../../helpers/unixTimestampToLocalTime'
import { IWeather } from '../../types/weather'
import {
  Container,
  MainInfoWrapper,
  SubItemsWrapper,
  SubItem,
  CityName,
  TempText,
  SubItemsSwitter,
} from './styles'

type IWeatherCard = {
  preSetAsFahrenheit: boolean
  toggleSettingsTempUnity: () => void
} & IWeather

const WeatherCard: React.FC<IWeatherCard> = ({
  main,
  weather,
  wind,
  clouds,
  name,
  sys,
  preSetAsFahrenheit,
  toggleSettingsTempUnity,
}) => {
  const currentWeather = MOCK_WEATHERS.includes(weather[0].main)
    ? weather[0].main
    : 'Clear'

  const WeatherIconManeger: { [key: string]: React.ReactNode } = {
    Clear: <ClearDay />,
    Thunderstorm: <Thunder />,
    Drizzle: <Drizzle />,
    Rain: <Drizzle />,
    Snow: <Snow />,
    Clouds: <Cloud />,
  }

  const localSunrise = unixTimestampToLocalTime({
    timestamp: sys.sunrise,
    location: sys.country,
  })

  const localSunset = unixTimestampToLocalTime({
    timestamp: sys.sunset,
    location: sys.country,
  })

  const temp = preSetAsFahrenheit ? celsiusToFahrenheit(main.temp) : main.temp

  return (
    <Container>
      <MainInfoWrapper>
        {WeatherIconManeger[currentWeather]}

        <CityName>{name}</CityName>

        <h2>{weather[0].description}</h2>

        <TempText onClick={toggleSettingsTempUnity}>
          {Math.round(temp)}
          <span>{preSetAsFahrenheit ? '°F' : '°C'}</span>
        </TempText>
      </MainInfoWrapper>

      <SubItemsSwitter>
        <SubItemsWrapper>
          <SubItem>
            <Sunrise />

            <p>{localSunrise}</p>
            <p>Sunrise</p>
          </SubItem>

          <SubItem>
            <Moonrise />

            <p>{localSunset}</p>
            <p>Sunset</p>
          </SubItem>
        </SubItemsWrapper>

        <SubItemsWrapper>
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
