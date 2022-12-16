import React from 'react'
import { PagehigherOrderComponent, WeatherCard } from '../../components'
import { usePreSet } from '../../hooks/preSet'
import { Container, WeatherCardsWrapper } from './styles'

const Home = () => {
  const { featuredWeathers } = usePreSet()

  return (
    <Container>
      <h1>Today's Report</h1>

      <WeatherCardsWrapper>
        {featuredWeathers.map((featuredWeather) => (
          <WeatherCard key={featuredWeather.id} {...featuredWeather} />
        ))}
      </WeatherCardsWrapper>
    </Container>
  )
}

export default PagehigherOrderComponent(Home)
