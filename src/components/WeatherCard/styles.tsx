import styled from 'styled-components'

export const Container = styled.div`
  width: 400px;
  height: 600px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* background: lightcoral; */
`
export const MainInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > svg {
    width: 250px;
    height: 250px;
  }

  > h2 {
    font-size: 32px;
  }
`

export const TempText = styled.p`
  margin-top: 20px;
  font-size: 50px;
  font-weight: bolder;
  display: flex;

  > span {
    font-size: 32px;
    margin: -6px 0 0 6px;
    color: #339cff;
  }
`

export const SubItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0;
`

export const SubItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-weight: bold;
    font-size: 16px;
  }

  svg {
    width: 50px;
    height: 40px;
    margin-bottom: 20px;
  }
`

export const CityName = styled.p`
  font-size: 32px;
  color: #339cff;
`
