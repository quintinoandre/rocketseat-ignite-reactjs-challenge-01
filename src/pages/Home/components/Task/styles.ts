import styled from 'styled-components'

const TaskContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  padding: 1rem;
  background: ${({ theme }) => theme['gray-500']};
  border: 1px solid ${({ theme }) => theme['gray-400']};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  width: 46rem;
  height: 4.5rem;
`

const BaseTask = styled.p`
  width: 39.5rem;
  height: 2.5rem;
`

const TaskDone = styled(BaseTask)`
  color: ${({ theme }) => theme['gray-300']};
  text-decoration-line: line-through;
`

const TaskNotDone = styled(BaseTask)`
  color: ${({ theme }) => theme['gray-100']};
`

const CircleButton = styled.button`
  background: transparent;
  border: 0;
  color: ${({ theme }) => theme['blue-100']};
  cursor: pointer;
  line-height: 0;
  border-radius: 4px;
  transition: color 0.1s;

  &:hover {
    color: ${({ theme }) => theme['blue-200']};
  }
`

const CheckCircleButton = styled.button`
  background: ${({ theme }) => theme['purple-200']};
  border: 0;
  color: ${({ theme }) => theme['gray-100']};
  cursor: pointer;
  line-height: 0;
  border-radius: 999px;
  transition: color 0.1s, background-color 0.1s;

  &:hover {
    background: ${({ theme }) => theme['purple-100']};
  }
`

const TrashButton = styled.button`
  background: transparent;
  border: 0;
  color: ${({ theme }) => theme['gray-300']};
  cursor: pointer;
  line-height: 0;
  border-radius: 4px;
  transition: color 0.1s;

  &:hover {
    color: ${({ theme }) => theme['red-100']};
    background: ${({ theme }) => theme['gray-400']};
  }
`

export {
  TaskContainer,
  TaskDone,
  TaskNotDone,
  CircleButton,
  CheckCircleButton,
  TrashButton,
}
