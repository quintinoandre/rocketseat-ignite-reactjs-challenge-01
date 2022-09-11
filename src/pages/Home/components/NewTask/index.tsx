import { PlusCircle } from 'phosphor-react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'

import { TasksContext } from '../../../../contexts/tasksContext'
import { CreateNewTaskButton, FormContainer, TaskInput } from './styles'

const newTaskFormValidationSchema = zod.object({
  title: zod.string().min(1, 'Inform the task'),
})

type NewTaskFormData = zod.infer<typeof newTaskFormValidationSchema>

function NewTask() {
  const { register, handleSubmit, watch, reset } = useForm<NewTaskFormData>({
    resolver: zodResolver(newTaskFormValidationSchema),
    defaultValues: { title: '' },
  })

  const { createNewTask } = useContext(TasksContext)

  function handleCreateNewTask({ title }: NewTaskFormData) {
    createNewTask({ title })

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
