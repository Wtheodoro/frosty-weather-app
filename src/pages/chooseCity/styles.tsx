import styled from 'styled-components'

interface IContainer {
  isSecondPlan: boolean
}

export const Container = styled.div<IContainer>`
  height: 100%;
  width: 100vw;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  opacity: ${(props) => (props.isSecondPlan ? '0.4' : '1')};
  transition: opacity 0.3s ease-in-out;

  span {
    font-weight: bold;
  }
`

export const CitiesPickerWrapper = styled.div`
  max-height: 75%;
  overflow-y: scroll;
  max-width: 600px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`
