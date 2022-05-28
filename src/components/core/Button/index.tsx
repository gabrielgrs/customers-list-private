import styled, { css } from 'styled-components'

const Button = styled.button<{ fullWidth?: boolean }>`
  ${({ theme, fullWidth }) => css`
    cursor: pointer;
    height: 32px;
    border: none;
    text-transform: uppercase;
    border-radius: 4px;
    font-weight: 600;
    background-color: ${theme.colors.primary};
    color: ${theme.contrasts.primary};
    transition: 0.4s;
    padding: 0 16px;
    width: ${fullWidth ? '100%' : 'auto'};

    &:hover {
      opacity: 0.7;
    }
  `}
`

export default Button
