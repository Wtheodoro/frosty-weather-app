import styled from 'styled-components'

export const Container = styled.div`
  width: 380px;
  height: 550px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

  > p {
    margin-top: 20px;
    font-size: 50px;
    font-weight: bolder;
    display: flex;

    > span {
      font-size: 32px;
      margin: -6px 0 0 6px;
      color: #339cff;
    }
  }
`

export const SubItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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

export const IconWrapper = styled.div``
