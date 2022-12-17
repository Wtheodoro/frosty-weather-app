import React from 'react'
import { PagehigherOrderComponent, WeatherCard } from '../../components'
import { usePreSet } from '../../hooks/preSet'
import useHorizontalScroll from '../../hooks/useHorizontalScroll'
import { Container, WeatherCardsWrapper } from './styles'

const Home = () => {
  const {
    dataWeathers,
    featuredCities,
    toggleSettingsTempUnity,
    preSetAsFahrenheit,
  } = usePreSet()

  const scrollRef = useHorizontalScroll()

  const featuredWeathers = dataWeathers.filter((data) =>
    featuredCities.includes(data.name)
  )

  const showFourLessCards = featuredWeathers.length < 4

  return (
    <Container>
      <h1>Today's Report</h1>

      <WeatherCardsWrapper centralizerCards={showFourLessCards} ref={scrollRef}>
        {featuredWeathers.map((featuredWeather) => (
          <WeatherCard
            key={featuredWeather?.id}
            {...featuredWeather}
            toggleSettingsTempUnity={toggleSettingsTempUnity}
            preSetAsFahrenheit={preSetAsFahrenheit}
          />
        ))}
      </WeatherCardsWrapper>
    </Container>
  )
}

export default PagehigherOrderComponent(Home, true)
