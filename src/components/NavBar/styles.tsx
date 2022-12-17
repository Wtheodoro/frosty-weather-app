import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 70px;
  background: #171829;
  border-radius: 18px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (min-width: 768px) {
    width: 100px;
    height: 100%;
    flex-direction: column;
    padding-top: 50px;
  }
`

export const LogoWrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    position: absolute;
    top: 20px;
    margin-left: 10px;

    p:nth-child(-n + 1) {
      margin-left: -10px;
    }

    p {
      font-size: 32px;
      font-weight: bolder;
      color: white;
    }
  }
`

interface IIconWrapper {
  active: boolean
}

export const IconWrapper = styled.div<IIconWrapper>`
  cursor: pointer;

  > svg {
    width: ${(props) => (props.active ? '50px' : '30px')};
    height: ${(props) => (props.active ? '50px' : '30px')};
  }
`
