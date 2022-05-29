import styled, { css } from 'styled-components'

export const Input = styled.input`
  ${({ theme }) => css`
    height: 32px;
    width: 100%;
    border: none;
    background: transparent;
    border-bottom: solid #ccc 1px;
    transition: 0.4s;
    color: ${theme.colors.black};

    &:focus {
      border: none;
      outline: none;
      border-bottom: solid ${theme.colors.primary} 1px;
    }
  `}
`
