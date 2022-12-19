import React from 'react'
import { PagehigherOrderComponent, WeatherCard } from '../../components'
import { usePreSet } from '../../hooks/preSet'
import { Container, WeatherCardsWrapper } from './styles'
import { isMobile } from 'react-device-detect'

const Home = () => {
  const {
    dataWeathers,
    featuredCities,
    toggleSettingsTempUnity,
    preSetAsFahrenheit,
    toggleSettingsLocationTime,
    preSetAsCountryLocationTime,
  } = usePreSet()

  const featuredWeathers = dataWeathers.filter((data) =>
    featuredCities.includes(data.name)
  )

  const showFourLessCards = featuredWeathers.length < 4

  return (
    <Container>
      <h1>Today's Report</h1>

      <WeatherCardsWrapper
        centralizerCards={showFourLessCards}
        isMobile={isMobile}
      >
        {featuredWeathers.map((featuredWeather) => (
          <WeatherCard
            key={featuredWeather?.id}
            {...featuredWeather}
            toggleSettingsTempUnity={toggleSettingsTempUnity}
            preSetAsFahrenheit={preSetAsFahrenheit}
            toggleSettingsLocationTime={toggleSettingsLocationTime}
            preSetAsCountryLocationTime={preSetAsCountryLocationTime}
          />
        ))}

        {!featuredCities.length && (
          <p>
            Please, choose at least one city so you can see some weather
            information
          </p>
        )}
      </WeatherCardsWrapper>
    </Container>
  )
}

export default PagehigherOrderComponent(Home, true)
