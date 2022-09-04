import styled from 'styled-components'

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const BaseTasksContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 8.625rem;
  height: 1.1875rem;
  font-weight: 700;
  line-height: 1.0625rem;
`

const CreatedTasksContainer = styled(BaseTasksContainer)`
  color: ${({ theme }) => theme['blue-100']};
`

const CompletedTasksContainer = styled(BaseTasksContainer)`
  color: ${({ theme }) => theme['purple-100']};
`

const Span = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.125rem 0.5rem;
  font-size: 0.75rem;
  line-height: 0.9375rem;
  color: ${({ theme }) => theme['gray-200']};
  background: ${({ theme }) => theme['gray-400']};
  border-radius: 999px;
`

export { InfoContainer, CreatedTasksContainer, CompletedTasksContainer, Span }
