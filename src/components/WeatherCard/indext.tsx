import React from 'react'
import { ClearDay, Cloud, Humidity, Wind, Thunder, Drizzle, Snow } from '..'
import MOCK_WEATHERS from '../../constants/weather'
import { IWeather } from '../../types/weather'
import {
  Container,
  MainInfoWrapper,
  SubItemsWrapper,
  SubItem,
  CityName,
  TempText,
} from './styles'

const WeatherCard: React.FC<IWeather> = ({
  main,
  weather,
  wind,
  clouds,
  name,
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

  return (
    <Container>
      <MainInfoWrapper>
        {WeatherIconManeger[currentWeather]}

        <CityName>{name}</CityName>

        <h2>{weather[0].description}</h2>

        <TempText>
          {Math.round(main.temp)}
          <span>°C</span>
        </TempText>
      </MainInfoWrapper>

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
    </Container>
  )
}

export default WeatherCard
