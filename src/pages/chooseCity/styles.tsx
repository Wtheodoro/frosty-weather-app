import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  span {
    font-weight: bold;
  }
`

export const CitiesPickerWrapper = styled.div`
  max-width: 600px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`
