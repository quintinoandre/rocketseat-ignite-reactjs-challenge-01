import styled from 'styled-components'

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 1.5rem;
  gap: 1rem;
  width: 46rem;
  height: 15.25rem;
  border-top: 1px solid ${({ theme }) => theme['gray-400']};
  border-radius: 8px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    color: ${({ theme }) => theme['gray-300']};
  }

  strong {
    font-weight: 700;
  }
`

export { EmptyContainer }
