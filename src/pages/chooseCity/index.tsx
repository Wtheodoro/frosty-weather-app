import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  AddCityMenu,
  Button,
  CityPicker,
  DeleteCityMenu,
} from '../../components'
import { useAppContext } from '../../hooks/useAppContext'
import { CitiesPickerWrapper, Container, ButtonsWrapper } from './styles'

const ChooseCity = () => {
  const [isAddCityMenuVisible, setIsAddCityMenuVisible] =
    useState<boolean>(false)
  const [isDeleteCityMenuVisible, setIsDeleteCityMenuVisible] =
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
    deleteCity,
  } = useAppContext()

  const pushToHome = () => navigate('/home')

  const toggleisAddCityMenuVisible = () =>
    setIsAddCityMenuVisible(!isAddCityMenuVisible)

  const toggleDeleteCityMenuVisible = () =>
    setIsDeleteCityMenuVisible(!isDeleteCityMenuVisible)

  const handleContainerClick = () => {
    if (isAddCityMenuVisible) setIsAddCityMenuVisible(false)
    if (isDeleteCityMenuVisible) setIsDeleteCityMenuVisible(false)
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
        isSecondPlan={isAddCityMenuVisible || isDeleteCityMenuVisible}
        onClick={handleContainerClick}
      >
        <h1>CHOOSE CITY</h1>

        {!allCitiesNames.length ? (
          <p>
            Please add at least <span>one</span> or <span>more</span> city
          </p>
        ) : (
          <p>
            Please choose <span>one</span> or <span>more</span> cities to
            display
          </p>
        )}

        <ButtonsWrapper>
          <Button
            onClick={toggleisAddCityMenuVisible}
            disabled={isAddCityMenuVisible}
          >
            + add city
          </Button>

          <Button
            onClick={toggleDeleteCityMenuVisible}
            disabled={isDeleteCityMenuVisible || !allCitiesNames.length}
            styleType='red'
          >
            - delete city
          </Button>
        </ButtonsWrapper>

        <CitiesPickerWrapper>
          {allCitiesNames.map((city) => (
            <CityPicker
              key={city}
              isChoosen={choosenCitiesNames.includes(city)}
              onClick={() => toggleCityName(city)}
              disabled={isAddCityMenuVisible || isDeleteCityMenuVisible}
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
      <DeleteCityMenu
        cities={allCitiesNames}
        isOpen={isDeleteCityMenuVisible}
        onClose={toggleDeleteCityMenuVisible}
        onDeleteCity={deleteCity}
      />
    </>
  )
}

export default ChooseCity
