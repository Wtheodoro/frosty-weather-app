import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from 'react'
import MOCK_CITIES from '../constants/cities'
import weatherServices from '../services/weather-services'
import { IWeather } from '../types/weather'

interface IAppContext {
  featuredCities: string[]
  dataWeathers: IWeather[]
  hasSomeFeaturedCity: boolean
  updateFeaturedCities: (city: string) => void
  isTemperatureInFahrenheit: boolean
  toggleSettingsTempUnity: () => void
  isCountryLocationTime: boolean
  toggleSettingsLocationTime: () => void
  newCityMessage: string
  getNewCityWeather: (newCityName: string) => void
  citiesToChoose: string[]
  setnewCityMessage: (message: string) => void
  updateCityWeather: (cityName: string) => void
  citiesWaitingData: string[]
}

interface IAppContextProvider {
  children: React.ReactNode
}

const AppContext = createContext<IAppContext>({} as IAppContext)

const AppContextProvider: React.FC<IAppContextProvider> = ({ children }) => {
  const [citiesToChoose, setCitiesToChoose] = useState<string[]>(() => {
    const citiesString = localStorage.getItem('@frosty:featuredCities')

    if (citiesString) {
      const mockWithSavedCities: string[] = [
        ...MOCK_CITIES,
        ...JSON.parse(citiesString),
      ]

      return mockWithSavedCities.filter(
        (item, index) => mockWithSavedCities.indexOf(item) === index
      )
    }

    return MOCK_CITIES
  })
  const [newCityMessage, setnewCityMessage] = useState<string>('')
  const [dataWeathers, setDataWeathers] = useState<IWeather[]>([])
  const [citiesWaitingData, setCitiesWaitingData] = useState<string[]>([])
  const [featuredCities, setFeaturedCities] = useState<string[]>(() => {
    const citiesString = localStorage.getItem('@frosty:featuredCities')

    if (citiesString) return JSON.parse(citiesString)

    return []
  })
  const [isTemperatureInFahrenheit, setIsTemperatureInFahrenheit] =
    useState<boolean>(() => {
      const settings = localStorage.getItem('@frosty:settingsAsFahrenheit')

      return !!settings
    })
  const [isCountryLocationTime, setIsCountryLocationTime] = useState<boolean>(
    () => {
      const settings = localStorage.getItem(
        '@frosty:settingsAsCountryLocationTime'
      )

      return !!settings
    }
  )

  const addCityOnCitiesToChooseList = (newCityName: string) =>
    setCitiesToChoose([...citiesToChoose, newCityName])

  const getNewCityWeather = async (newCityName: string) => {
    if (citiesToChoose.includes(newCityName)) return
    if (citiesWaitingData.includes(newCityName)) return

    setCitiesWaitingData([...citiesWaitingData, newCityName])
    setnewCityMessage('')

    const currentWeather = await weatherServices.getCityWeather(newCityName)

    const citiesDataAlreadyRequested = dataWeathers.map(
      (dataWeather) => dataWeather.id
    )

    const isCurrentCityAlreadyRequested = citiesDataAlreadyRequested.includes(
      currentWeather.id
    )

    if (isCurrentCityAlreadyRequested)
      return setnewCityMessage(
        `It looks like we already have ${newCityName} selected.`
      )

    if (currentWeather.message === 'city not found') {
      return setnewCityMessage(
        `Sorry, It looks like we don't have ${newCityName} weather information yet.`
      )
    }

    setnewCityMessage(`Uhul! We found ${newCityName} weather informations.`)

    setDataWeathers((prevData) => [...prevData, currentWeather])
    addCityOnCitiesToChooseList(currentWeather.name)
    updateFeaturedCities(currentWeather.name, true)
    setCitiesWaitingData(
      citiesWaitingData.filter((cityWaiting) => cityWaiting !== newCityName)
    )
  }

  const toggleSettingsTempUnity = () => {
    if (isTemperatureInFahrenheit) {
      setIsTemperatureInFahrenheit(false)
      localStorage.removeItem('@frosty:settingsAsFahrenheit')
      return
    }

    setIsTemperatureInFahrenheit(true)
    localStorage.setItem('@frosty:settingsAsFahrenheit', 'true')
  }

  const toggleSettingsLocationTime = () => {
    if (isCountryLocationTime) {
      setIsCountryLocationTime(false)
      localStorage.removeItem('@frosty:settingsAsCountryLocationTime')
      return
    }

    setIsCountryLocationTime(true)
    localStorage.setItem('@frosty:settingsAsCountryLocationTime', 'true')
  }

  const hasSomeFeaturedCity = !!featuredCities.length

  const updateCityWeather = async (cityName: string) => {
    if (citiesWaitingData.includes(cityName)) return
    setCitiesWaitingData([...citiesWaitingData, cityName])

    const cityNewData = await weatherServices.getCityWeather(cityName)

    const allCitiesData: IWeather[] = dataWeathers
    const updateCityDataIndex = dataWeathers.findIndex(
      (dataWeather) => dataWeather.name === cityName
    )

    if (updateCityDataIndex) {
      allCitiesData[updateCityDataIndex] = cityNewData
    }

    setCitiesWaitingData(
      citiesWaitingData.filter((cityWaiting) => cityWaiting !== cityName)
    )
  }

  const updateFeaturedCities = async (city: string, isCustomCity?: boolean) => {
    const currentCityAlreadyChoosen = featuredCities.find(
      (featuredCity: string) => featuredCity === city
    )

    let newSetOfCities: string[] = []

    if (currentCityAlreadyChoosen)
      newSetOfCities = featuredCities.filter(
        (featuredCity) => featuredCity !== city
      )

    if (!currentCityAlreadyChoosen) newSetOfCities = [...featuredCities, city]

    setFeaturedCities(newSetOfCities)

    if (!isCustomCity) await getCityWeather(city)

    localStorage.setItem(
      '@frosty:featuredCities',
      JSON.stringify(newSetOfCities)
    )
  }

  const getCityWeather = async (currentCityName: string) => {
    if (citiesWaitingData.includes(currentCityName)) return

    setCitiesWaitingData([...citiesWaitingData, currentCityName])

    const currentCityAlreadyRequested = dataWeathers
      .map((dataWeather) => dataWeather.name)
      .includes(currentCityName)

    if (currentCityAlreadyRequested) return

    const currentWeather = await weatherServices.getCityWeather(currentCityName)

    setDataWeathers((prevData) => [...prevData, currentWeather])
    setCitiesWaitingData(
      citiesWaitingData.filter((cityWaiting) => cityWaiting !== currentCityName)
    )
  }

  const getCitiesWeatherOnAppInit = useCallback(async () => {
    const weathers = await Promise.all(
      featuredCities.map(weatherServices.getCityWeather)
    )

    setDataWeathers(weathers)
  }, [featuredCities])

  useEffect(() => {
    if (!hasSomeFeaturedCity) return
    getCitiesWeatherOnAppInit()
  }, [getCitiesWeatherOnAppInit, hasSomeFeaturedCity])

  return (
    <AppContext.Provider
      value={{
        featuredCities,
        hasSomeFeaturedCity,
        updateFeaturedCities,
        dataWeathers,
        isTemperatureInFahrenheit,
        toggleSettingsTempUnity,
        isCountryLocationTime,
        toggleSettingsLocationTime,
        newCityMessage,
        getNewCityWeather,
        citiesToChoose,
        setnewCityMessage,
        updateCityWeather,
        citiesWaitingData,
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
