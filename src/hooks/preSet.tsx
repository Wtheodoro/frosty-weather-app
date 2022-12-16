import React, { createContext, useState, useContext } from 'react'

interface IPreSet {
  featuredCities: string[]
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
    localStorage.setItem(
      '@frosty:featuredCities',
      JSON.stringify(newSetOfCities)
    )
  }

  return (
    <PreSet.Provider
      value={{ featuredCities, hasSomePreSettedCity, updateFeaturedCities }}
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
