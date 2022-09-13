import { Check, Circle, Trash } from 'phosphor-react'
import { useContext } from 'react'

import { TasksContext } from '../../../../contexts/tasksContext'
import {
  CheckCircleButton,
  CircleButton,
  CreatedAtButton,
  DeadlineButton,
  TaskDone,
  TaskNotDone,
  TaskRowContainer,
  TrashButton,
} from './styles'

interface IProps {
  id: string
  title: string
  done: boolean
  deadline: Date
  createdAt: Date
  userId: string
}

function TaskRow({ id, title, done, createdAt, deadline }: IProps) {
  const { checkTask, uncheckTask, deleteTask } = useContext(TasksContext)

  function handleCheckTask() {
    checkTask(id)
  }

  function handleUncheckTask() {
    uncheckTask(id)
  }

  function handleDeleteTask() {
    deleteTask(id)
  }

  return (
    <TaskRowContainer>
      <td>
        {done ? (
          <CheckCircleButton
            onClick={handleUncheckTask}
            title="Mark the task as not done"
          >
            <Check size={24} />
          </CheckCircleButton>
        ) : (
          <CircleButton onClick={handleCheckTask} title="Mark the task as done">
            <Circle size={24} />
          </CircleButton>
        )}
      </td>
      <td>
        {done ? (
          <TaskDone>{title}</TaskDone>
        ) : (
          <TaskNotDone>{title}</TaskNotDone>
        )}
      </td>
      <td>
        <CreatedAtButton>
          {createdAt.getFullYear()}-{createdAt.getMonth()}-{createdAt.getDay()}{' '}
          {createdAt.getHours()}:{createdAt.getMinutes()}:
          {createdAt.getSeconds()}
        </CreatedAtButton>
      </td>
      <td>
        <DeadlineButton>
          {deadline.getFullYear()}-{deadline.getMonth()}-{deadline.getDay()}{' '}
          {deadline.getHours()}:{deadline.getMinutes()}:{deadline.getSeconds()}
        </DeadlineButton>
      </td>
      <td>
        <TrashButton onClick={handleDeleteTask} title="Delete task">
          <Trash size={24} />
        </TrashButton>
      </td>
    </TaskRowContainer>
  )
}

export { TaskRow }
