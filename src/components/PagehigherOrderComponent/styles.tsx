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
`

export const ComponentWrapper = styled.div`
  position: absolute;
  z-index: 10;
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
