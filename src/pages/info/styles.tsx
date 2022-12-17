import styled, { keyframes } from 'styled-components'

const hiThereAnimation = keyframes`
  30% { transform: scale(1.2); }
  40%, 60% { transform: rotate(-20deg) scale(1.2); }
  50% { transform: rotate(20deg) scale(1.2); }
  70% { transform: rotate(0deg) scale(1.2); }
  100% { transform: scale(1); }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h3 span {
    color: #339ccf;
  }

  a {
    text-decoration: none;
    font-weight: bold;
    color: #ff003d;
  }

  a + a {
    animation: ${hiThereAnimation} 8s infinite alternate;
  }

  button,
  > div {
    margin-top: 70px;
  }
`
