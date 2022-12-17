import styled, { keyframes } from 'styled-components'

export const Container = styled.main`
  max-width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;

  h1,
  p {
    text-align: center;
    margin-top: 20px;
  }

  span {
    font-weight: bold;
    color: #ff003d;
  }

  svg {
    width: 200px;
    height: 220px;
  }

  > div {
    position: relative;
    width: 210px;
    height: 230px;
  }

  > button {
    margin-top: 50px;
  }
`

const LogoAnimation = keyframes`
  0% {
    transform: translateX(10px);
  }

  40% {
    transform: translateX(10px);
  }

  60% {
    transform: translateX(-390px);
  }

  100% {
    transform: translateX(-390px);
  }
`

export const LogoWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 600px;
  animation: ${LogoAnimation} 8s infinite alternate;
`

const LeftVanishAnimation = keyframes`
  0% {
    opacity: 1;
  }

  60% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`

export const VanishLeftLogo = styled.div`
  animation: ${LeftVanishAnimation} 8s infinite alternate;
`

const RightVanishAnimation = keyframes`
  0% {
    opacity: 0;
  }

  60% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

export const VanishRightLogo = styled.div`
  animation: ${RightVanishAnimation} 8s infinite alternate;
`
