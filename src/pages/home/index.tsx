import React from 'react'
import { PagehigherOrderComponent, WeatherCard } from '../../components'
import { useAppContext } from '../../hooks/useAppContext'
import { Container, WeatherCardsWrapper } from './styles'
import { isMobile } from 'react-device-detect'
import { useAppContextNew } from '../../hooks/useAppContextNew'

const Home = () => {
  const {
    dataWeathers,
    featuredCities,
    toggleSettingsTempUnity,
    isTemperatureInFahrenheit,
    toggleSettingsLocationTime,
    isCountryLocationTime,
    updateCityWeather,
    citiesWaitingData,
  } = useAppContext()

  const { citiesInformations, reFetchCityWeather } = useAppContextNew()

  const citiesAbleToDisplay = Object.keys(citiesInformations)
    .map((cityName) => citiesInformations[cityName])
    .filter((cityInformation) => cityInformation.weatherData)

  // const featuredWeathers = dataWeathers.filter((data) =>
  //   featuredCities.includes(data.name)
  // )

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
            toggleSettingsTempUnity={toggleSettingsTempUnity}
            isTemperatureInFahrenheit={isTemperatureInFahrenheit}
            toggleSettingsLocationTime={toggleSettingsLocationTime}
            isCountryLocationTime={isCountryLocationTime}
            onUpdateWeather={reFetchCityWeather}
            isWaitingNewData={isLoading}
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
