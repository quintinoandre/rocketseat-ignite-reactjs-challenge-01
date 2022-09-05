import { Check, Circle, Trash } from 'phosphor-react'

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
  onCheckTask: (id: String) => void
  onUncheckTask: (id: String) => void
  onDeleteTask: (id: String) => void
}

function Task({
  id,
  title,
  done,
  onCheckTask,
  onUncheckTask,
  onDeleteTask,
}: IProps) {
  function handleDeleteTask() {
    onDeleteTask(id)
  }

  function handleCheckTask() {
    onCheckTask(id)
  }

  function handleUncheckTask() {
    onUncheckTask(id)
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
