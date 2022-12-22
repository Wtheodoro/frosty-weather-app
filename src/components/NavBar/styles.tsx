import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.nav`
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
    position: absolute;
    top: 40px;
    display: block;
    border-radius: 50%;

    > img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
`

interface IIconWrapper {
  active: 'true' | 'false'
}

export const IconWrapper = styled(Link)<IIconWrapper>`
  cursor: pointer;

  > svg {
    width: ${(props) => (props.active === 'true' ? '50px' : '30px')};
    height: ${(props) => (props.active === 'true' ? '50px' : '30px')};
  }
`
