import styled from 'styled-components'

export const Container = styled.div`
  > h1 {
    text-align: center;
  }
`

export const WeatherCardsWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  overflow-x: scroll;
  overflow-y: hidden;

  div {
    padding: 0 30px;
  }
`
