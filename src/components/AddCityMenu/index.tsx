import React, { useState } from 'react'
import { useAppContext } from '../../hooks/useAppContext'
import Button from '../Button'
import { Container, SearchWrapper, Message } from './styles'

interface IAddCityMenu {
  onClose: () => void
  isOpen: boolean
  onSearchCity: (cityName: string) => void
  newCityCondition: {
    isLoading: boolean
    message: string
  }
}

const AddCityMenu: React.FC<IAddCityMenu> = ({
  onClose,
  isOpen,
  onSearchCity,
  newCityCondition,
}) => {
  const [newCityName, setNewCityName] = useState<string>('')

  const { citiesInformations } = useAppContext()

  const handleCloseClick = () => {
    setNewCityName('')
    onClose()
  }

  const handleKeypress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') onSearchCity(newCityName.toLowerCase())
  }

  const isLoading = citiesInformations[newCityName]?.isLoading

  return (
    <Container data-testid='addCityMenu-test-id' isOpen={isOpen}>
      <p>
        Ooops, looks like your city is not on our list, is it true? <br />
        Well, no problem! Just add your city in the field below.
      </p>

      <h1></h1>

      <SearchWrapper>
        <input
          type='text'
          value={newCityName}
          onChange={({ target }) => setNewCityName(target.value)}
          onKeyDown={handleKeypress}
        />

        <Button
          onClick={() => onSearchCity(newCityName.toLowerCase())}
          styleType='white'
          disabled={isLoading}
        >
          Search
        </Button>
      </SearchWrapper>

      <Button onClick={handleCloseClick} styleType='white'>
        Close
      </Button>

      <Message>{newCityCondition.message}</Message>
    </Container>
  )
}

export default AddCityMenu
