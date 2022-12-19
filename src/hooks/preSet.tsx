import React, { createContext, useState, useContext, useEffect } from 'react'
import MOCK_CITIES from '../constants/cities'
import weatherServices from '../services/weather-services'
import { IWeather } from '../types/weather'

interface IPreSet {
  featuredCities: string[]
  dataWeathers: IWeather[]
  hasSomePreSettedCity: boolean
  updateFeaturedCities: (city: string) => void
  preSetAsFahrenheit: boolean
  toggleSettingsTempUnity: () => void
  preSetAsCountryLocationTime: boolean
  toggleSettingsLocationTime: () => void
  newCityMessage: string
  getNewCityWeather: (newCityName: string) => void
  citiesToChoose: string[]
  setnewCityMessage: (message: string) => void
}

interface IPresetProvider {
  children: React.ReactNode
}

const PreSet = createContext<IPreSet>({} as IPreSet)

const PreSetProvider: React.FC<IPresetProvider> = ({ children }) => {
  const [citiesToChoose, setCitiesToChoose] = useState<string[]>(() => {
    const citiesString = localStorage.getItem('@frosty:featuredCities')

    if (citiesString) {
      const mockWithSavedCities = [...MOCK_CITIES, ...JSON.parse(citiesString)]

      return mockWithSavedCities.filter(
        (item, index) => mockWithSavedCities.indexOf(item) === index
      )
    }

    return MOCK_CITIES
  })
  const [newCityMessage, setnewCityMessage] = useState<string>('')
  const [dataWeathers, setdataWeathers] = useState<IWeather[]>([])
  const [citiesWaitingData, setCitiesWaitingData] = useState<string[]>([])
  const [featuredCities, setFeaturedCities] = useState<string[]>(() => {
    const citiesString = localStorage.getItem('@frosty:featuredCities')

    if (citiesString) return JSON.parse(citiesString)

    return []
  })
  const [preSetAsFahrenheit, setPreSetAsFahrenheit] = useState<boolean>(() => {
    const settings = localStorage.getItem('@frosty:settingsAsFahrenheit')

    return !!settings
  })
  const [preSetAsCountryLocationTime, setPreSetAsCountryLocationTime] =
    useState<boolean>(() => {
      const settings = localStorage.getItem(
        '@frosty:settingsAsCountryLocationTime'
      )

      return !!settings
    })

  const addCityOnCitiesToChooseList = (newCityName: string) =>
    setCitiesToChoose([...citiesToChoose, newCityName])

  const getNewCityWeather = async (newCityName: string) => {
    if (citiesToChoose.includes(newCityName)) return
    if (citiesWaitingData.includes(newCityName)) return

    setCitiesWaitingData([...citiesWaitingData, newCityName])
    setnewCityMessage('')

    const currentWeather = await weatherServices.getCityWeather(newCityName)

    if (currentWeather.message === 'city not found') {
      return setnewCityMessage(
        `Sorry, It looks like we dont have ${newCityName} weather information yet.`
      )
    }

    setnewCityMessage(`Uhul! We found ${newCityName} weather informations.`)

    setdataWeathers((prevData) => [...prevData, currentWeather])
    addCityOnCitiesToChooseList(currentWeather.name)
    updateFeaturedCities(currentWeather.name, true)
    setCitiesWaitingData(
      citiesWaitingData.filter((cityWaiting) => cityWaiting !== newCityName)
    )
  }

  const toggleSettingsTempUnity = () => {
    if (preSetAsFahrenheit) {
      setPreSetAsFahrenheit(false)
      localStorage.removeItem('@frosty:settingsAsFahrenheit')
      return
    }

    setPreSetAsFahrenheit(true)
    localStorage.setItem('@frosty:settingsAsFahrenheit', 'true')
  }

  const toggleSettingsLocationTime = () => {
    if (preSetAsCountryLocationTime) {
      setPreSetAsCountryLocationTime(false)
      localStorage.removeItem('@frosty:settingsAsCountryLocationTime')
      return
    }

    setPreSetAsCountryLocationTime(true)
    localStorage.setItem('@frosty:settingsAsCountryLocationTime', 'true')
  }

  const hasSomePreSettedCity = !!featuredCities.length

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

    setdataWeathers((prevData) => [...prevData, currentWeather])
    setCitiesWaitingData(
      citiesWaitingData.filter((cityWaiting) => cityWaiting !== currentCityName)
    )
  }

  const getCitiesWeatherOnAppInit = async () => {
    const weathers = await Promise.all(
      featuredCities.map(
        async (city) => await weatherServices.getCityWeather(city)
      )
    )

    setdataWeathers(weathers)
  }

  useEffect(() => {
    if (!hasSomePreSettedCity) return
    getCitiesWeatherOnAppInit()
  }, [])

  return (
    <PreSet.Provider
      value={{
        featuredCities,
        hasSomePreSettedCity,
        updateFeaturedCities,
        dataWeathers,
        preSetAsFahrenheit,
        toggleSettingsTempUnity,
        preSetAsCountryLocationTime,
        toggleSettingsLocationTime,
        newCityMessage,
        getNewCityWeather,
        citiesToChoose,
        setnewCityMessage,
      }}
    >
      {children}
    </PreSet.Provider>
  )
}

function usePreSet(): IPreSet {
  const context = useContext(PreSet)
  return context
}

export { PreSetProvider, usePreSet }
