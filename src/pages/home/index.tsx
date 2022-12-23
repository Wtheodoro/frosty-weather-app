import React from 'react'
import { PagehigherOrderComponent, WeatherCard } from '../../components'
import { Container, WeatherCardsWrapper } from './styles'
import { isMobile } from 'react-device-detect'
import { useAppContext } from '../../hooks/useAppContext'

const Home = () => {
  const {
    citiesInformations,
    reFetchCityWeather,
    userSettingsPreferences,
    setUserPreferences,
  } = useAppContext()

  const citiesAbleToDisplay = Object.keys(citiesInformations)
    .map((cityName) => citiesInformations[cityName])
    .filter((cityInformation) => cityInformation.weatherData)

  const showFourLessCards = citiesAbleToDisplay.length < 4

  return (
    <Container>
      <h1>Today's Report</h1>

      <WeatherCardsWrapper
        centralizerCards={showFourLessCards}
        isMobile={isMobile}
      >
        {citiesAbleToDisplay.map(({ weatherData, isLoading }) => (
          <WeatherCard
            key={weatherData?.id}
            {...weatherData!}
            onUpdateWeather={reFetchCityWeather}
            isWaitingNewData={isLoading}
            userSettings={userSettingsPreferences}
            setUserPreferences={setUserPreferences}
          />
        ))}

        {!citiesAbleToDisplay.length && (
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
