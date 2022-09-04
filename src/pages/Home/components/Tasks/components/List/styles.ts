import styled from 'styled-components'

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  overflow-y: auto;
  max-height: 25.5rem;

  &::-webkit-scrollbar {
    width: 0.625rem;
    height: 0.625rem;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme['gray-100']};
    border: 1px solid ${({ theme }) => theme['gray-100']};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme['blue-200']};
    border: 1px solid ${({ theme }) => theme['blue-200']};
    transition: color 0.1s, background-color 0.1s;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme['blue-100']};
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }
`

export { ListContainer }
