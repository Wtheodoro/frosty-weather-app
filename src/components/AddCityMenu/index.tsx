import React, { useState } from 'react'
import { usePreSet } from '../../hooks/preSet'
import CustomButton from '../CustomButton'
import { Container } from './styles'

interface IAddCityMenu {
  onClose: () => void
}

const AddCityMenu: React.FC<IAddCityMenu> = ({ onClose }) => {
  const [newCityName, setNewCityName] = useState<string>('')

  const { getNewCityWeather, newCityErrorMessage } = usePreSet()

  return (
    <Container>
      <p>Well, no problem! Just add your city in the field below.</p>

      <p>Ooops, looks like your city is not on our list, is it true?</p>

      <input
        type='text'
        onChange={({ target }) => setNewCityName(target.value)}
      />

      <CustomButton
        onClick={() => getNewCityWeather(newCityName.toLowerCase())}
      >
        verify
      </CustomButton>

      {newCityErrorMessage}

      <CustomButton onClick={onClose}>Done!</CustomButton>
    </Container>
  )
}

export default AddCityMenu
