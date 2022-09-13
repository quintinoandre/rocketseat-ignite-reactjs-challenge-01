import styled from 'styled-components'

const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: absolute;
  width: 65.3125rem;
  height: 25.125rem;
  left: calc(50% - 65.3125rem / 2);
  top: 18.1875rem;
`

const ListContainer = styled.div`
  flex: 1;
  overflow: auto;

  table {
    width: 100%;
    border-collapse: collapse;

    th {
      background: ${({ theme }) => theme['gray-400']};
      padding: 1rem;
      text-align: left;

      &:first-child {
        border-top-left-radius: 8px;
      }

      &:last-child {
        border-top-right-radius: 8px;
      }
    }
  }

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

export { TasksContainer, ListContainer }
