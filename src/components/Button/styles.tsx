import styled, { css } from 'styled-components'
import { ButtonStyleType } from '.'

interface IConatainer {
  disabled?: boolean
  styleType: ButtonStyleType
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
  red: () => css`
    background: #ff5232;
    color: white;
    border: none;
    opacity: 0.5;
    transition: all 0.5s;
    &:hover {
      opacity: 1;
    }
  `,
}

export const Wrapper = styled.button<IConatainer>`
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  opacity: ${(props) => (props.disabled ? '0.4' : '1')};
  cursor: pointer;
  ${({ styleType }) => buttonColorModifier[styleType]}
`
