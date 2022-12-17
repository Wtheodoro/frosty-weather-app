import styled from 'styled-components'

export const Container = styled.div`
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
  }
`

interface IIconWrapper {
  active: boolean
}

export const IconWrapper = styled.div<IIconWrapper>`
  > svg {
    width: ${(props) => (props.active ? '50px' : '30px')};
    height: ${(props) => (props.active ? '50px' : '30px')};
  }
`
