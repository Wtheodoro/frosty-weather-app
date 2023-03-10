import styled, { css, keyframes } from 'styled-components'

export const Container = styled.div`
  position: relative;
  min-width: 100vw;
  height: 100%;
  max-height: 550px;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: -20px;

  @media (min-width: 600px) {
    min-width: 400px;
  }

  @media (min-width: 768px) {
    min-width: 400px;
    margin: 0;
  }
`
export const MainInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > svg {
    width: 200px;
    height: 200px;
  }

  > h2 {
    font-size: 32px;
    text-align: center;
  }

  @media (min-width: 768px) {
    > svg {
      width: 250px;
      height: 250px;
    }
  }
`

export const TempText = styled.p`
  margin: 20px 0 0 38px;
  font-size: 50px;
  font-weight: bolder;
  display: flex;
  cursor: pointer;

  > span {
    font-size: 32px;
    margin: -6px 0 0 6px;
    color: #339cff;
  }

  @media (min-width: 768px) {
    &:hover {
      scale: 1.1;
    }
  }
`

export const SubItemsWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0;

  @media (min-width: 768px) {
    justify-content: space-around;
  }
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

export const ClickableSubItem = styled(SubItem)`
  cursor: pointer;

  p {
    font-size: 12px;
    text-align: center;
  }

  svg {
    width: 30px;
    height: 30px;
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    &:hover {
      scale: 1.1;
    }
  }
`

export const CityName = styled.p`
  font-size: 32px;
  color: #339cff;
`
const FirstAppearAnimation = keyframes`
  0%, 40% {
    opacity: 1;
    pointer-events: all;
  }

  60%, 100% {
    opacity: 0;
    pointer-events: none;
  }
`

const SecondAppearAnimation = keyframes`
  0%, 40%  {
    opacity: 0;
  }

  60%, 100% {
    opacity: 1;

  }
`

export const SubItemsSwitter = styled.section`
  position: relative;
  height: 90px;

  ${SubItemsWrapper}:nth-child(1) {
    animation: ${FirstAppearAnimation} 8s infinite alternate;
    z-index: 10;
  }

  ${SubItemsWrapper}:nth-child(2) {
    animation: ${SecondAppearAnimation} 8s infinite alternate;
    z-index: 0;
  }
`

interface IReloadIconWrapper {
  isRotating?: boolean
}

const SpinAnimation = keyframes`
  100% {
    transform:rotate(360deg);
  }
`

const ReloadWrapperModifier = {
  animationLoading: () => css`
    animation: ${SpinAnimation} 1500ms infinite;
  `,
}

export const ReloadIconWrapper = styled.div<IReloadIconWrapper>`
  position: absolute;
  top: 20px;
  right: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: 0.9;

  > svg {
    ${({ isRotating }) => isRotating && ReloadWrapperModifier.animationLoading}
  }

  span {
    font-size: 12px;
  }
`
