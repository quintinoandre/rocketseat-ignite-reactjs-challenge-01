import { PlusCircle } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import * as zod from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'

import { CreateNewTaskButton, FormContainer, TaskInput } from './styles'

const newTaskFormValidationSchema = zod.object({
  title: zod.string().min(1, 'Inform the task'),
})

type NewTaskFormData = zod.infer<typeof newTaskFormValidationSchema>

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
  const { register, handleSubmit, watch, reset } = useForm<NewTaskFormData>({
    resolver: zodResolver(newTaskFormValidationSchema),
    defaultValues: { title: '' },
  })

  function handleCreateNewTask({ title }: NewTaskFormData) {
    onCreateNewTask({
      id: uuidv4(),
      title,
      done: false,
      deadline: new Date(),
      createdAt: new Date(),
      userId: uuidv4(),
    })

    reset()
  }

  const title = watch('title')

  const isSubmitDisable = !title

  return (
    <FormContainer onSubmit={handleSubmit(handleCreateNewTask)}>
      <TaskInput
        id="title"
        type="text"
        placeholder="Add a new task"
        {...register('title')}
      />
      <CreateNewTaskButton type="submit" disabled={isSubmitDisable}>
        Create
        <PlusCircle size={16} />
      </CreateNewTaskButton>
    </FormContainer>
  )
}

export { NewTask }
