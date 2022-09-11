import { useContext } from 'react'

import { TasksContext } from '../../../../contexts/tasksContext'
import {
  CompletedTasksContainer,
  CreatedTasksContainer,
  InfoContainer,
  Span,
} from './styles'

function Info() {
  const { findNumberOfTasks, findNumberOfCompletedTasks } =
    useContext(TasksContext)

  return (
    <InfoContainer>
      <CreatedTasksContainer>
        Tasks created
        <Span>{findNumberOfTasks()}</Span>
      </CreatedTasksContainer>
      <CompletedTasksContainer>
        Completed
        <Span>
          {findNumberOfCompletedTasks()} de {findNumberOfTasks()}
        </Span>
      </CompletedTasksContainer>
    </InfoContainer>
  )
}

export { Info }
