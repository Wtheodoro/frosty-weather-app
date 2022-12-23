import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import MOCK_CITIES from '../constants/cities'
import weatherServices from '../services/weather-services'
import { ICitiesInformationMap } from '../types/city'
import { ISetSetting, ISettings } from '../types/settings'
import { IWeather } from '../types/weather'

interface IAppContext {
  allCitiesNames: string[]
  choosenCitiesNames: string[]
  toggleCityName: (cityName: string) => void
  citiesInformations: ICitiesInformationMap
  reFetchCityWeather: (cityName: string) => void
  getNewCityWeather: (cityName: string) => Promise<{ message: string }>
  userSettingsPreferences: ISettings
  setUserPreferences: ISetSetting
  resetAllData: () => void
}

interface IAppContextProvider {
  children: React.ReactNode
}

const AppContext = createContext<IAppContext>({} as IAppContext)

const AppContextProvider: React.FC<IAppContextProvider> = ({ children }) => {
  const [allCitiesNames, setAllCitiesNames] = useState<string[]>(() => {
    const citiesString = localStorage.getItem('@frosty:allCitiesNames')
    if (citiesString) return JSON.parse(citiesString)

    localStorage.setItem('@frosty:allCitiesNames', JSON.stringify(MOCK_CITIES))
    return MOCK_CITIES
  })

  const [choosenCitiesNames, setChoosenCitiesNames] = useState<string[]>(() => {
    const citiesString = localStorage.getItem('@frosty:choosenCitiesNames')
    if (citiesString) return JSON.parse(citiesString)
    return []
  })

  const [citiesInformations, setCitiesInformations] =
    useState<ICitiesInformationMap>({})

  const [userSettingsPreferences, setUserSettingsPreferences] =
    useState<ISettings>({
      isCountryLocationTime: false,
      isTemperatureInFahrenheit: false,
    })

  const toggleCityName = async (currentCityName: string) => {
    setCitiesInformations((prev) => ({
      ...prev,
      ...{
        [currentCityName]: { isLoading: true, weatherData: null },
      },
    }))

    if (choosenCitiesNames.includes(currentCityName)) {
      const updatedChoosenCitiesNames = choosenCitiesNames.filter(
        (name) => name !== currentCityName
      )

      setChoosenCitiesNames(updatedChoosenCitiesNames)
      localStorage.setItem(
        '@frosty:choosenCitiesNames',
        JSON.stringify(updatedChoosenCitiesNames)
      )

      return
    }

    setChoosenCitiesNames([...choosenCitiesNames, currentCityName])
    localStorage.setItem(
      '@frosty:choosenCitiesNames',
      JSON.stringify([...choosenCitiesNames, currentCityName])
    )

    const currentWeather: IWeather = await weatherServices.getCityWeather(
      currentCityName
    )

    if (currentWeather.cod === 200) {
      setCitiesInformations((prev) => ({
        ...prev,
        ...{
          [currentCityName]: { isLoading: false, weatherData: currentWeather },
        },
      }))
    }
  }

  const reFetchCityWeather = async (cityName: string) => {
    setCitiesInformations((prev) => ({
      ...prev,
      ...{
        [cityName]: {
          ...prev[cityName],
          isLoading: true,
        },
      },
    }))

    const currentWeather = await weatherServices.getCityWeather(cityName)

    if (currentWeather.cod === 200) {
      setCitiesInformations((prev) => ({
        ...citiesInformations,
        ...{
          [cityName]: { isLoading: false, weatherData: currentWeather },
        },
      }))
    }
  }

  const getCitiesWeatherOnAppInit = useCallback(async () => {
    const weathersData: IWeather[] = await Promise.all(
      choosenCitiesNames.map(weatherServices.getCityWeather)
    )

    const citiesReduce = weathersData.reduce<any>((accumulator, current) => {
      accumulator[current.name] = { weatherData: current, isLoading: false }
      return accumulator
    }, {})

    setCitiesInformations(citiesReduce)
  }, [choosenCitiesNames])

  const getNewCityWeather = async (newCityName: string) => {
    try {
      const currentWeather: IWeather = await weatherServices.getCityWeather(
        newCityName
      )

      setAllCitiesNames((prev) => [...prev, currentWeather.name])
      setChoosenCitiesNames([...choosenCitiesNames, currentWeather.name])
      setCitiesInformations((prev) => ({
        ...prev,
        ...{
          [currentWeather.name]: {
            isLoading: false,
            weatherData: currentWeather,
          },
        },
      }))

      return {
        message: `Uhul! We found ${newCityName} weather informations.`,
        cityFound: true,
      }
    } catch (error) {
      return {
        message: `Sorry, It looks like we don't have ${newCityName} weather information yet.`,
        cityFound: false,
      }
    }
  }

  const setUserPreferences = {
    toggleTemperatureUnit: () =>
      setUserSettingsPreferences({
        ...userSettingsPreferences,
        isTemperatureInFahrenheit:
          !userSettingsPreferences.isTemperatureInFahrenheit,
      }),
    toggleTimeLocation: () =>
      setUserSettingsPreferences({
        ...userSettingsPreferences,
        isCountryLocationTime: !userSettingsPreferences.isCountryLocationTime,
      }),
  }

  const resetAllData = () => {
    setAllCitiesNames(MOCK_CITIES)
    setChoosenCitiesNames([])
    localStorage.clear()
  }

  useEffect(() => {
    getCitiesWeatherOnAppInit()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <AppContext.Provider
      value={{
        allCitiesNames,
        choosenCitiesNames,
        toggleCityName,
        citiesInformations,
        reFetchCityWeather,
        getNewCityWeather,
        userSettingsPreferences,
        setUserPreferences,
        resetAllData,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

function useAppContext(): IAppContext {
  const context = useContext(AppContext)
  return context
}

export { AppContextProvider, useAppContext }
