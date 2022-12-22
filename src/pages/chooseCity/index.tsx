import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, CityPicker, PagehigherOrderComponent } from '../../components'
import AddCityMenu from '../../components/AddCityMenu'
import { usePreSet } from '../../hooks/preSet'
import { CitiesPickerWrapper, Container } from './styles'

const ChooseCity = () => {
  const [showAddCityMenu, setAddCityMenu] = useState<boolean>(false)
  const navigate = useNavigate()
  const {
    citiesToChoose,
    updateFeaturedCities,
    featuredCities,
    hasSomePreSettedCity,
  } = usePreSet()

  const pushToHome = () => navigate('/home')

  const toggleShowAddCityMenu = () => setAddCityMenu(!showAddCityMenu)

  const handleContainerClick = () => {
    if (!showAddCityMenu) return

    setAddCityMenu(false)
  }

  return (
    <>
      <Container isSecondPlan={showAddCityMenu} onClick={handleContainerClick}>
        <h1>CHOOSE CITY</h1>

        <p>
          Please choose <span>one</span> or <span>more</span> cities to display
        </p>

        <Button onClick={toggleShowAddCityMenu} disabled={showAddCityMenu}>
          + add city
        </Button>

        <CitiesPickerWrapper>
          {citiesToChoose.map((city) => (
            <CityPicker
              key={city}
              isChoosen={featuredCities.includes(city)}
              onClick={() => updateFeaturedCities(city)}
              disabled={showAddCityMenu}
            >
              {city}
            </CityPicker>
          ))}
        </CitiesPickerWrapper>

        <Button onClick={pushToHome} disabled={!hasSomePreSettedCity}>
          Ready!
        </Button>
      </Container>
      <AddCityMenu onClose={toggleShowAddCityMenu} isOpen={showAddCityMenu} />
    </>
  )
}

export default PagehigherOrderComponent(ChooseCity)
