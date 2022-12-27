import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import MOCK_CITIES from '../constants/cities'
import weatherServices from '../services/weather-services'
import { ICitiesInformationMap, ICity } from '../types/city'
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
  deleteCity: (cityName: string) => void
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
    addNewKeyToCitiesInformationsObject(currentCityName, {
      isLoading: true,
      weatherData: null,
    })

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
      addNewKeyToCitiesInformationsObject(currentCityName, {
        isLoading: false,
        weatherData: currentWeather,
      })
    }
  }

  const addNewKeyToCitiesInformationsObject = (key: string, value: ICity) => {
    setCitiesInformations((prev) => ({
      ...prev,
      ...{
        [key]: value,
      },
    }))
  }

  const removeKeyFromCitiesInformationsObject = (key: string) => {
    setCitiesInformations((prev) => {
      const { [key]: remove, ...newCitiesInformation } = prev

      return newCitiesInformation
    })
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
      addNewKeyToCitiesInformationsObject(cityName, {
        isLoading: false,
        weatherData: currentWeather,
      })
    }
  }

  const getCitiesWeatherOnAppInit = useCallback(async () => {
    const weathersData: IWeather[] = await Promise.all(
      choosenCitiesNames.map(weatherServices.getCityWeather)
    )

    const citiesReduce = weathersData.reduce<ICitiesInformationMap>(
      (accumulator, current) => {
        accumulator[current.name] = { weatherData: current, isLoading: false }
        return accumulator
      },
      {} as ICitiesInformationMap
    )

    setCitiesInformations(citiesReduce)
  }, [choosenCitiesNames])

  const getNewCityWeather = async (newCityName: string) => {
    addNewKeyToCitiesInformationsObject(newCityName, {
      isLoading: true,
      weatherData: null,
    })

    let newCityStatus = { message: '', cityFound: false }

    try {
      const currentWeather: IWeather = await weatherServices.getCityWeather(
        newCityName
      )

      if (currentWeather.name in citiesInformations) {
        removeKeyFromCitiesInformationsObject(newCityName)

        return {
          message: `It looks like we already have ${newCityName}.`,
          cityFound: true,
        }
      }

      setAllCitiesNames((prev) => [...prev, currentWeather.name])
      setChoosenCitiesNames([...choosenCitiesNames, currentWeather.name])

      addNewKeyToCitiesInformationsObject(currentWeather.name, {
        isLoading: false,
        weatherData: currentWeather,
      })

      localStorage.setItem(
        '@frosty:allCitiesNames',
        JSON.stringify([...allCitiesNames, currentWeather.name])
      )

      newCityStatus = {
        message: `Uhul! We found ${newCityName} weather informations.`,
        cityFound: true,
      }
    } catch (error) {
      newCityStatus = {
        message: `Sorry, It looks like we don't have ${newCityName} weather information yet.`,
        cityFound: false,
      }
    }

    removeKeyFromCitiesInformationsObject(newCityName)

    return newCityStatus
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

  const deleteCity = (currentCity: string) => {
    const newCities = allCitiesNames.filter((city) => city !== currentCity)

    const newChoosenCities = choosenCitiesNames.filter(
      (city) => city !== currentCity
    )

    removeKeyFromCitiesInformationsObject(currentCity)

    setChoosenCitiesNames(newChoosenCities)
    setAllCitiesNames(newCities)
    localStorage.setItem('@frosty:allCitiesNames', JSON.stringify(newCities))
    localStorage.setItem(
      '@frosty:choosenCitiesNames',
      JSON.stringify(newChoosenCities)
    )
  }

  const resetAllData = () => {
    setAllCitiesNames(MOCK_CITIES)
    setChoosenCitiesNames([])
    setCitiesInformations({})
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
        deleteCity,
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
