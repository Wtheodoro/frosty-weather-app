import React, { createContext, useState, useContext, useEffect } from 'react'
import weatherServices from '../services/weather-services'
import { IWeather } from '../types/weather'

interface IPreSet {
  featuredCities: string[]
  featuredWeathers: IWeather[]
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

  const [featuredWeathers, setFeaturedWeathers] = useState<IWeather[]>([])

  const hasSomePreSettedCity = !!featuredCities.length

  const updateFeaturedCities = (city: string) => {
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
    getCityWeather(city)
    localStorage.setItem(
      '@frosty:featuredCities',
      JSON.stringify(newSetOfCities)
    )
  }

  const getCityWeather = async (currentCityName: string) => {
    const currentCityAlreadyRequested = featuredWeathers.find(
      (city) =>
        city?.name?.toLocaleLowerCase() === currentCityName.toLocaleLowerCase()
    )

    if (!currentCityAlreadyRequested) {
      const currentWeather = await weatherServices.getCityWeather(
        currentCityName
      )
      setFeaturedWeathers([...featuredWeathers, currentWeather])
    }
  }

  const getCitiesWeather = async () => {
    const weathers = await Promise.all(
      featuredCities.map(
        async (city) => await weatherServices.getCityWeather(city)
      )
    )

    setFeaturedWeathers(weathers)
  }

  useEffect(() => {
    if (!hasSomePreSettedCity) return
    getCitiesWeather()
  }, [])

  return (
    <PreSet.Provider
      value={{
        featuredCities,
        hasSomePreSettedCity,
        updateFeaturedCities,
        featuredWeathers,
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
