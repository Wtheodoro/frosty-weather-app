import React from 'react'
import { ClearDay, Cloud, Humidity, Wind, Thunder, Drizzle, Snow } from '..'
import weathers from '../../constants/weather'
import { IWeather } from '../../types/weather'
import { Container, MainInfoWrapper, SubItemsWrapper, SubItem } from './styles'

const WeatherCard: React.FC<IWeather> = ({
  main,
  weather,
  wind,
  clouds,
  name,
}) => {
  console.log(main)
  console.log(weather[0])

  const currentWeather = weathers.includes(weather[0].main)
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

        <p>{name}</p>

        <h2>{weather[0].description}</h2>

        <p>
          {Math.round(main.temp)}
          <span>°C</span>
        </p>
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
