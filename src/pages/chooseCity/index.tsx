import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, CityPicker, PagehigherOrderComponent } from '../../components'
import AddCityMenu from '../../components/AddCityMenu'
import { useAppContext } from '../../hooks/useAppContext'
import { CitiesPickerWrapper, Container } from './styles'

const ChooseCity = () => {
  const [isAddCityMenuVisible, setIsAddCityMenuVisible] =
    useState<boolean>(false)
  const navigate = useNavigate()
  const {
    citiesToChoose,
    updateFeaturedCities,
    featuredCities,
    hasSomeFeaturedCity,
  } = useAppContext()

  const pushToHome = () => navigate('/home')

  const toggleisAddCityMenuVisible = () =>
    setIsAddCityMenuVisible(!isAddCityMenuVisible)

  const handleContainerClick = () => {
    if (!isAddCityMenuVisible) return

    setIsAddCityMenuVisible(false)
  }

  return (
    <>
      <Container
        isSecondPlan={isAddCityMenuVisible}
        onClick={handleContainerClick}
      >
        <h1>CHOOSE CITY</h1>

        <p>
          Please choose <span>one</span> or <span>more</span> cities to display
        </p>

        <Button
          onClick={toggleisAddCityMenuVisible}
          disabled={isAddCityMenuVisible}
        >
          + add city
        </Button>

        <CitiesPickerWrapper>
          {citiesToChoose.map((city) => (
            <CityPicker
              key={city}
              isChoosen={featuredCities.includes(city)}
              onClick={() => updateFeaturedCities(city)}
              disabled={isAddCityMenuVisible}
            >
              {city}
            </CityPicker>
          ))}
        </CitiesPickerWrapper>

        <Button onClick={pushToHome} disabled={!hasSomeFeaturedCity}>
          Ready!
        </Button>
      </Container>
      <AddCityMenu
        onClose={toggleisAddCityMenuVisible}
        isOpen={isAddCityMenuVisible}
      />
    </>
  )
}

export default PagehigherOrderComponent(ChooseCity)
