import React from 'react'
import { PagehigherOrderComponent, WeatherCard } from '../../components'
import { usePreSet } from '../../hooks/preSet'

const Home = () => {
  const { featuredWeathers } = usePreSet()

  return (
    <div>
      <h1>Today's Report</h1>

      {featuredWeathers.map((featuredWeather) => (
        <WeatherCard key={featuredWeather.id} {...featuredWeather} />
      ))}
    </div>
  )
}

export default PagehigherOrderComponent(Home)
