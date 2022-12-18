import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CustomButton,
  CityPicker,
  PagehigherOrderComponent,
} from '../../components'
import MOCK_CITIES from '../../constants/cities'
import { usePreSet } from '../../hooks/preSet'
import { CitiesPickerWrapper, Container } from './styles'

const ChooseCity = () => {
  const navigate = useNavigate()
  const { updateFeaturedCities, featuredCities, hasSomePreSettedCity } =
    usePreSet()

  const pushToHome = () => navigate('/home')

  return (
    <Container>
      <h1>CHOOSE CITY</h1>

      <p>
        Please choose <span>one</span> or <span>more</span> cities to display
      </p>

      <CitiesPickerWrapper>
        {MOCK_CITIES.map((city) => (
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
    </Container>
  )
}

export default PagehigherOrderComponent(ChooseCity)
