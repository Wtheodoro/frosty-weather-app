import React from 'react'
import Button from '../Button'
import { Container, ButtonsWrapper, Item } from './styles'

interface IDeleteCityMenu {
  onClose: () => void
  isOpen: boolean
  onDeleteCity: (cityName: string) => void
  cities: string[]
}

const DeleteCityMenu: React.FC<IDeleteCityMenu> = ({
  onClose,
  isOpen,
  onDeleteCity,
  cities,
}) => {
  const handleClick = (city: string) => {
    onDeleteCity(city)

    if (cities.length === 1) onClose()
  }
  return (
    <Container data-testid='DeleteCityMenu-test-id' isOpen={isOpen}>
      <p>
        Do you want yo remove any city from your app? <br />
        Just select the city you want to remove.
      </p>

      <ButtonsWrapper>
        {cities.map((city) => (
          <Item key={city}>
            <Button onClick={() => handleClick(city)} styleType='white'>
              {city}
            </Button>
          </Item>
        ))}
      </ButtonsWrapper>

      <Button onClick={onClose} styleType='blue'>
        Close
      </Button>
    </Container>
  )
}

export default DeleteCityMenu
