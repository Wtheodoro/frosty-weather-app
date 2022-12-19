import styled, { css } from 'styled-components'
import { ButtonstyleType } from '.'

interface IConatainer {
  disabled?: boolean
  styleType: ButtonstyleType
}

const buttonColorModifier = {
  blue: () => css`
    background: #0095ff;
    color: white;
    border: none;
  `,
  white: () => css`
    background: white;
    color: #0095ff;
    border: 1px solid #0095ff;
  `,
}

export const Container = styled.button<IConatainer>`
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  opacity: ${(props) => (props.disabled ? '0.4' : '1')};
  cursor: pointer;
  ${({ styleType }) => buttonColorModifier[styleType]}
`
