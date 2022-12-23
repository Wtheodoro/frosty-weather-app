import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, CityPicker, PagehigherOrderComponent } from '../../components'
import AddCityMenu from '../../components/AddCityMenu'
import { useAppContext } from '../../hooks/useAppContext'
import { CitiesPickerWrapper, Container } from './styles'

const ChooseCity = () => {
  const [isAddCityMenuVisible, setIsAddCityMenuVisible] =
    useState<boolean>(false)
  const [newCityCondition, setnewCityCondition] = useState({
    isLoading: false,
    message: '',
  })

  const navigate = useNavigate()

  const {
    allCitiesNames,
    toggleCityName,
    choosenCitiesNames,
    getNewCityWeather,
  } = useAppContext()

  const pushToHome = () => navigate('/home')

  const toggleisAddCityMenuVisible = () =>
    setIsAddCityMenuVisible(!isAddCityMenuVisible)

  const handleContainerClick = () => {
    if (!isAddCityMenuVisible) return

    setIsAddCityMenuVisible(false)
  }

  const addNewCity = async (newCityName: string) => {
    if (!newCityName) return
    setnewCityCondition({ message: '', isLoading: true })

    const addCityResponse = await getNewCityWeather(newCityName)

    setnewCityCondition({
      ...addCityResponse,
      isLoading: false,
    })
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
          {allCitiesNames.map((city) => (
            <CityPicker
              key={city}
              isChoosen={choosenCitiesNames.includes(city)}
              onClick={() => toggleCityName(city)}
              disabled={isAddCityMenuVisible}
            >
              {city}
            </CityPicker>
          ))}
        </CitiesPickerWrapper>

        <Button onClick={pushToHome} disabled={!choosenCitiesNames.length}>
          Ready!
        </Button>
      </Container>
      <AddCityMenu
        onSearchCity={addNewCity}
        onClose={toggleisAddCityMenuVisible}
        isOpen={isAddCityMenuVisible}
        newCityCondition={newCityCondition}
      />
    </>
  )
}

export default PagehigherOrderComponent(ChooseCity)
