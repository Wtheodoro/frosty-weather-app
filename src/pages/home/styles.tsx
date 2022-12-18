import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 80px;

  > h1 {
    text-align: center;
    margin: 20px 0;
  }

  @media (min-width: 768px) {
    padding-bottom: 0;
  }
`

interface IWeatherCardsWrapper {
  centralizerCards: boolean
}

export const WeatherCardsWrapper = styled.div<IWeatherCardsWrapper>`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100vw;
  overflow-x: scroll;
  overflow-y: hidden;
  padding: 0 55px;

  > div + div {
    margin-left: 100px;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    height: calc(100vh - 85px);
    width: calc(100vw - 120px);
    padding: 0 0 50px 0;
    overflow-y: scroll;
    flex-wrap: wrap;
    gap: 50px;

    justify-content: ${(props) =>
      props.centralizerCards ? 'center' : 'space-evenly'};

    > div + div {
      margin-left: 0;
    }
  }
`
