import styled from 'styled-components'

interface IConatainer {
  disabled?: boolean
}

export const Container = styled.button<IConatainer>`
  padding: 1rem 2rem;
  text-decoration: none;
  border: none;
  border-radius: 8px;
  background: #0095ff;
  color: white;
  font-weight: bold;
  opacity: ${(props) => (props.disabled ? '0.4' : '1')};
  cursor: pointer;
`
