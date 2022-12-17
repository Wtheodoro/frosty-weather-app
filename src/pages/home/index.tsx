import React from 'react'
import { PagehigherOrderComponent, WeatherCard } from '../../components'
import { usePreSet } from '../../hooks/preSet'
import { Container, WeatherCardsWrapper } from './styles'

const Home = () => {
  const { dataWeathers, featuredCities } = usePreSet()

  const featuredWeathers = dataWeathers.filter((data) =>
    featuredCities.includes(data.name)
  )

  console.log(dataWeathers)
  console.log(featuredWeathers)

  return (
    <Container>
      <h1>Today's Report</h1>

      <WeatherCardsWrapper>
        {featuredWeathers.map((featuredWeather) => (
          <WeatherCard key={featuredWeather?.id} {...featuredWeather} />
        ))}
      </WeatherCardsWrapper>
    </Container>
  )
}

export default PagehigherOrderComponent(Home)
