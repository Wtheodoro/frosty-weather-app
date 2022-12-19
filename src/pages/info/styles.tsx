import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 40px 20px 110px;

  h3 {
    margin-top: 20px;
  }

  h3 span {
    color: #339ccf;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    font-weight: bold;
    color: #ff003d;
  }

  @media (min-width: 768px) {
    padding: 20px;
  }
`

export const LogoWrapper = styled.div`
  border-radius: 50%;

  > img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
`
