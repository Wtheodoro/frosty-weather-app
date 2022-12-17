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
  padding: 0 80px;

  > div + div {
    margin-left: 100px;
  }
`
