import styled, { css } from 'styled-components'

export const Layout = styled.div`
  position: relative;
  min-width: 100vw;
  min-height: 100vh;
  background: #0b0c1e;
  color: white;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
`

interface IComponentWrapper {
  increseLeftMargin?: boolean
}

export const ComponentWrapper = styled.div<IComponentWrapper>`
  position: absolute;
  z-index: 10;

  @media (min-width: 768px) {
    margin-left: ${(props) => (props.increseLeftMargin ? '120px' : '0')};
  }
`

interface IDotBlur {
  color?: 'blue' | 'yellow' | 'red'
}

const blurColorModifier = {
  blue: () => css`
    background: #0095ff;
  `,
  yellow: () => css`
    background: #feb92d;
  `,
  red: () => css`
    background: red;
  `,
}

export const RedDotBlur = styled.div<IDotBlur>`
  width: 60px;
  height: 50px;
  margin-left: auto;
  margin-right: auto;

  filter: blur(60px);

  ${({ color }) => blurColorModifier[color || 'blue']}
`

export const DotsWrapper = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;

  width: 400px;
  display: flex;
  justify-content: space-between;
  transform: rotate(-143.2deg);
  z-index: 0;
`

export const NavWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px;
  z-index: 10;

  @media (min-width: 768px) {
    left: 0;
    height: 100%;
    width: 100px;
  }
`
