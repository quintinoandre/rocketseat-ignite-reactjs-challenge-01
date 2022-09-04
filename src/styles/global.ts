import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 :focus {
  outline: transparent;
  box-shadow: 0 0 0 2px ${({ theme }) => theme['blue-200']};
 }

 body {
  background: ${({ theme }) => theme['gray-600']};
  color: ${({ theme }) => theme['gray-100']};
  -webkit-font-smoothing: antialiased;
 }

 body, input, textarea, button{
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 140%;
 }
 `

export { GlobalStyle }
