import styled from 'styled-components'

const HeaderContainer = styled.header`
  background: ${({ theme }) => theme['gray-700']};
  height: 12.5rem;
  border: 1px solid ${({ theme }) => theme.black};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`

export { HeaderContainer }
