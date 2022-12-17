import React, { createContext, useState, useContext, useEffect } from 'react'
import weatherServices from '../services/weather-services'
import { IWeather } from '../types/weather'

interface IPreSet {
  featuredCities: string[]
  dataWeathers: IWeather[]
  hasSomePreSettedCity: boolean
  updateFeaturedCities: (cities: any) => void
}

interface IPresetProvider {
  children: React.ReactNode
}

const PreSet = createContext<IPreSet>({} as IPreSet)

const PreSetProvider: React.FC<IPresetProvider> = ({ children }) => {
  const [featuredCities, setFeaturedCities] = useState<string[]>(() => {
    const citiesString = localStorage.getItem('@frosty:featuredCities')

    if (citiesString) return JSON.parse(citiesString)

    return []
  })

  const [dataWeathers, setdataWeathers] = useState<IWeather[]>([])

  const hasSomePreSettedCity = !!featuredCities.length

  const updateFeaturedCities = async (city: string) => {
    const currentCityAlreadyChoosen = featuredCities.find(
      (featuredCity: string) => featuredCity === city
    )

    let newSetOfCities: string[] = []

    if (currentCityAlreadyChoosen)
      newSetOfCities = featuredCities.filter(
        (featuredCity) => featuredCity !== city
      )
    if (!currentCityAlreadyChoosen) newSetOfCities = [...featuredCities, city]

    await getCityWeather(city)

    setFeaturedCities(newSetOfCities)
    localStorage.setItem(
      '@frosty:featuredCities',
      JSON.stringify(newSetOfCities)
    )
  }

  const getCityWeather = async (currentCityName: string) => {
    const currentCityAlreadyRequested = dataWeathers.find(
      (city) =>
        city?.name?.toLocaleLowerCase() === currentCityName.toLocaleLowerCase()
    )

    if (!currentCityAlreadyRequested) {
      const currentWeather = await weatherServices.getCityWeather(
        currentCityName
      )
      setdataWeathers([...dataWeathers, currentWeather])
    }
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
