import styled from 'styled-components'

const TaskRowContainer = styled.tr`
  td {
    background-color: ${({ theme }) => theme['gray-500']};
    border-top: 4px solid ${({ theme }) => theme['gray-600']};
    padding: 1rem;
    text-align: center;

    &:nth-child(2) {
      text-align: left;
    }
  }

  &:last-child td:first-child {
    border-bottom-left-radius: 8px;
  }

  &:last-child td:last-child {
    border-bottom-right-radius: 8px;
  }
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

const BaseDateButton = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  color: ${({ theme }) => theme['gray-100']};

  &:hover {
    color: ${({ theme }) => theme['blue-100']};
  }
`

const CreatedAtButton = styled(BaseDateButton)``

const DeadlineButton = styled(BaseDateButton)``

export {
  TaskRowContainer,
  TaskDone,
  TaskNotDone,
  CircleButton,
  CheckCircleButton,
  TrashButton,
  CreatedAtButton,
  DeadlineButton,
}
