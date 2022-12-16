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

export const Gradient = styled.div`
  position: absolute;
  width: 404px;
  height: 800px;
  left: 20%;
  top: 5%;

  background: rgba(149, 66, 232, 0.35);
  filter: blur(175px);
  transform: rotate(-114.2deg);
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
  transform: rotate(-114.2deg);

  ${({ color }) => blurColorModifier[color || 'blue']}
`

export const DotsWrapper = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
`
