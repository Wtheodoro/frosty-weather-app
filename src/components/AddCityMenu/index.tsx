import React, { useEffect, useState } from 'react'
import { usePreSet } from '../../hooks/preSet'
import CustomButton from '../CustomButton'
import { Container, SearchWrapper, Message } from './styles'

interface IAddCityMenu {
  onClose: () => void
  isOpen: boolean
}

const AddCityMenu: React.FC<IAddCityMenu> = ({ onClose, isOpen }) => {
  const [newCityName, setNewCityName] = useState<string>('')

  const { getNewCityWeather, newCityMessage, setnewCityMessage } = usePreSet()

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

        <CustomButton
          onClick={() => getNewCityWeather(newCityName.toLowerCase())}
          styleType='white'
        >
          Search
        </CustomButton>
      </SearchWrapper>

      <CustomButton onClick={onClose} styleType='white'>
        Close
      </CustomButton>

      <Message>{newCityMessage}</Message>
    </Container>
  )
}

export default AddCityMenu
