import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CustomButton,
  CityPicker,
  PagehigherOrderComponent,
} from '../../components'
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

  return (
    <Container>
      <h1>CHOOSE CITY</h1>

      <p>
        Please choose <span>one</span> or <span>more</span> cities to display
      </p>

      <CustomButton onClick={toggleShowAddCityMenu}>+ add city</CustomButton>

      <CitiesPickerWrapper>
        {citiesToChoose.map((city) => (
          <CityPicker
            key={city}
            isChoosen={featuredCities.includes(city)}
            onClick={() => updateFeaturedCities(city)}
          >
            {city}
          </CityPicker>
        ))}
      </CitiesPickerWrapper>

      <CustomButton onClick={pushToHome} disabled={!hasSomePreSettedCity}>
        Ready!
      </CustomButton>

      {showAddCityMenu && <AddCityMenu onClose={toggleShowAddCityMenu} />}
    </Container>
  )
}

export default PagehigherOrderComponent(ChooseCity)
