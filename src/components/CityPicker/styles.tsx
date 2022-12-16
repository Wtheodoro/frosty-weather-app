import styled from 'styled-components'

interface IContainer {
  isChoosen?: boolean
}

export const Container = styled.div<IContainer>`
  border: 1px solid #0095ff;
  padding: 20px 30px;
  border-radius: 16px;
  text-align: center;
  color: ${(props) => (props.isChoosen ? 'white' : '#0095ff')};
  background: ${(props) => (props.isChoosen ? '#0095ff' : 'transparent')};
`
