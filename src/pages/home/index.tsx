import React from 'react'
import { PagehigherOrderComponent, WeatherCard } from '../../components'
import { useAppContext } from '../../hooks/useAppContext'
import { Container, WeatherCardsWrapper } from './styles'
import { isMobile } from 'react-device-detect'

const Home = () => {
  const {
    dataWeathers,
    featuredCities,
    toggleSettingsTempUnity,
    isTemperatureInFahrenheit,

    toggleSettingsLocationTime,
    isCountryLocationTime,
  } = useAppContext()

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
            isTemperatureInFahrenheit={isTemperatureInFahrenheit}
            toggleSettingsLocationTime={toggleSettingsLocationTime}
            isCountryLocationTime={isCountryLocationTime}
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
