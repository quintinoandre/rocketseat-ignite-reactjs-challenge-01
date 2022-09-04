import {
  CompletedTasksContainer,
  CreatedTasksContainer,
  InfoContainer,
  Span,
} from './styles'

interface IProps {
  numberOfTasks: number
  numberOfCompletedTasks: number
}

function Info({ numberOfTasks, numberOfCompletedTasks }: IProps) {
  return (
    <InfoContainer>
      <CreatedTasksContainer>
        Tasks created
        <Span>{numberOfTasks}</Span>
      </CreatedTasksContainer>
      <CompletedTasksContainer>
        Completed
        <Span>
          {numberOfCompletedTasks} de {numberOfTasks}
        </Span>
      </CompletedTasksContainer>
    </InfoContainer>
  )
}

export { Info }
