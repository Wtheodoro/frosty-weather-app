import styled from 'styled-components'

export const Container = styled.div`
  > h1 {
    text-align: center;
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
  padding: 0 80px;

  > div + div {
    margin-left: 100px;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    height: calc(100vh - 85px);
    width: calc(100vw - 90px);
    padding: 0;
    overflow-y: scroll;
    display: ${(props) => (props.centralizerCards ? 'flex' : 'grid')};
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 100px 0;
    justify-items: center;

    justify-content: ${(props) =>
      props.centralizerCards ? 'center' : 'space-between'};

    ::-webkit-scrollbar {
      display: block;
    }

    > div + div {
      margin-left: 0;
    }
  }
`
