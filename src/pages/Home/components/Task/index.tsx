import { Check, Circle, Trash } from 'phosphor-react'
import { useContext } from 'react'

import { TasksContext } from '../../../../contexts/tasksContext'
import {
  CheckCircleButton,
  CircleButton,
  TaskContainer,
  TaskDone,
  TaskNotDone,
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

function Task({ id, title, done }: IProps) {
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
    <TaskContainer>
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
      {done ? <TaskDone>{title}</TaskDone> : <TaskNotDone>{title}</TaskNotDone>}
      <TrashButton onClick={handleDeleteTask} title="Delete task">
        <Trash size={24} />
      </TrashButton>
    </TaskContainer>
  )
}

export { Task }
