import React from 'react'
import { PagehigherOrderComponent } from '../../components'
import { usePreSet } from '../../hooks/preSet'

const Home = () => {
  const { featuredCities } = usePreSet()

  return (
    <div>
      <h1>HOME PAGE</h1>
      {featuredCities.map((city: any) => (
        <p key={city}>{city}</p>
      ))}
    </div>
  )
}

export default PagehigherOrderComponent(Home)
