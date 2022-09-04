import styled from 'styled-components'

const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: calc(0rem - 1.6875rem);
`

const TaskInput = styled.input`
  display: flex;
  align-items: center;
  padding: 1rem;
  width: 39.875rem;
  height: 3.375rem;
  background: ${({ theme }) => theme['gray-500']};
  color: ${({ theme }) => theme['gray-300']};
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme['gray-700']};
  border-radius: 8px;

  &:focus {
    border: 1px solid ${({ theme }) => theme['purple-200']};
    color: ${({ theme }) => theme['gray-100']};
  }
`

const CreateNewTaskButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 0.5rem;
  width: 110px;
  height: 3.25rem;
  background: ${({ theme }) => theme['blue-200']};
  color: ${({ theme }) => theme['gray-100']};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme['blue-200']};
  font-weight: 700;
  cursor: pointer;
  transition: color 0.1s, background-color 0.1s;

  &:not(:disabled):hover {
    background: ${({ theme }) => theme['blue-100']};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export { FormContainer, TaskInput, CreateNewTaskButton }
