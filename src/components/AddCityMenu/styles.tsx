import styled from 'styled-components'

interface IMenuContainer {
  isOpen: boolean
}

export const Container = styled.div<IMenuContainer>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(100vw, 768px);
  height: 100vh;
  background: #0095ff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: white;
  padding: 40px 20px;
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  pointer-events: ${(props) => (props.isOpen ? 'all' : 'none')};
  transition: opacity 0.3s ease-in-out;

  > p {
    text-align: center;
    font-size: 22px;
    max-width: 500px;
  }
`

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    border: none;
    padding: 1rem 2rem;
    margin-right: 20px;
    border-radius: 8px;
  }
`

export const Message = styled.span`
  color: white;
`
