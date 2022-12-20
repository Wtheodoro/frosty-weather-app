import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 100px;

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
  isMobile: boolean
}

export const WeatherCardsWrapper = styled.div<IWeatherCardsWrapper>`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100vw;
  height: 100%;
  overflow-x: ${(props) => (props.isMobile ? 'scroll' : 'hidden')};
  overflow-y: ${(props) => (props.isMobile ? 'hidden' : 'scroll')};
  flex-wrap: ${(props) => (props.isMobile ? 'hidden' : 'wrap')};
  scroll-snap-type: x mandatory;

  > div {
    scroll-snap-align: center;
    scroll-snap-stop: always;
  }

  > div + div {
    margin: ${(props) => (props.isMobile ? '0 0 0 100px' : '20px 0 0 0')};
  }

  ::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    height: calc(100vh - 85px);
    width: calc(100vw - 120px);
    padding: 0 0 50px 0;
    overflow-y: scroll;
    gap: 50px;

    justify-content: ${(props) =>
      props.centralizerCards ? 'center' : 'space-evenly'};

    > div + div {
      margin-left: 0;
    }
  }
`
