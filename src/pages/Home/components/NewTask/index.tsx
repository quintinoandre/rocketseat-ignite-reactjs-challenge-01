import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { CreateNewTaskButton, FormContainer, TaskInput } from './styles'

interface ITask {
  id: string
  title: string
  done: boolean
  deadline: Date
  createdAt: Date
  userId: string
}

interface IProps {
  onCreateNewTask: (newTask: ITask) => void
}

function NewTask({ onCreateNewTask }: IProps) {
  const [newTaskText, setNewTaskText] = useState('')

  function handleNewTaskTextChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value)
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    onCreateNewTask({
      id: uuidv4(),
      title: newTaskText,
      done: false,
      deadline: new Date(),
      createdAt: new Date(),
      userId: uuidv4(),
    })

    setNewTaskText('')
  }

  const isNewTaskTextEmpty = newTaskText.length === 0

  return (
    <FormContainer onSubmit={(event) => handleCreateNewTask(event)}>
      <TaskInput
        type="text"
        placeholder="Add a new task"
        value={newTaskText}
        onChange={(event) => handleNewTaskTextChange(event)}
      />
      <CreateNewTaskButton type="submit" disabled={isNewTaskTextEmpty}>
        Create
        <PlusCircle size={16} />
      </CreateNewTaskButton>
    </FormContainer>
  )
}

export { NewTask }
