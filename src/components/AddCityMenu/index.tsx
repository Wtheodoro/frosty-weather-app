import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../hooks/useAppContext'
import Button from '../Button'
import { Container, SearchWrapper, Message } from './styles'

interface IAddCityMenu {
  onClose: () => void
  isOpen: boolean
}

const AddCityMenu: React.FC<IAddCityMenu> = ({ onClose, isOpen }) => {
  const [newCityName, setNewCityName] = useState<string>('')

  const { getNewCityWeather, newCityMessage, setnewCityMessage } =
    useAppContext()

  useEffect(() => {
    return () => setnewCityMessage('')
  }, [setnewCityMessage])

  return (
    <Container data-testid='addCityMenu-test-id' isOpen={isOpen}>
      <p>
        Ooops, looks like your city is not on our list, is it true? <br />
        Well, no problem! Just add your city in the field below.
      </p>

      <SearchWrapper>
        <input
          type='text'
          onChange={({ target }) => setNewCityName(target.value)}
        />

        <Button
          onClick={() => getNewCityWeather(newCityName.toLowerCase())}
          styleType='white'
        >
          Search
        </Button>
      </SearchWrapper>

      <Button onClick={onClose} styleType='white'>
        Close
      </Button>

      <Message>{newCityMessage}</Message>
    </Container>
  )
}

export default AddCityMenu
