import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { Empty } from './components/Empty'
import { Info } from './components/Info'
import { NewTask } from './components/NewTask'
import { Task } from './components/Task'
import { ListContainer, TasksContainer } from './styles'

const mockTasks = [
  {
    id: uuidv4(),
    title:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    done: false,
    deadline: new Date(),
    createdAt: new Date(),
    userId: uuidv4(),
  },
  {
    id: uuidv4(),
    title:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    done: false,
    deadline: new Date(),
    createdAt: new Date(),
    userId: uuidv4(),
  },
  {
    id: uuidv4(),
    title:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    done: false,
    deadline: new Date(),
    createdAt: new Date(),
    userId: uuidv4(),
  },
  {
    id: uuidv4(),
    title:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    done: true,
    deadline: new Date(),
    createdAt: new Date(),
    userId: uuidv4(),
  },
  {
    id: uuidv4(),
    title:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    done: true,
    deadline: new Date(),
    createdAt: new Date(),
    userId: uuidv4(),
  },
]

interface ITask {
  id: string
  title: string
  done: boolean
  deadline: Date
  createdAt: Date
  userId: string
}

function Home() {
  const [tasks, setTasks] = useState<ITask[]>([...mockTasks])

  function createNewTask(newTask: ITask) {
    setTasks([...tasks, newTask])
  }

  function checkTask(id: String) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.done = true
      }

      return task
    })

    setTasks(updatedTasks)
  }

  function uncheckTask(id: String) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.done = false
      }

      return task
    })

    setTasks(updatedTasks)
  }

  function deleteTask(id: String) {
    const tasksWithoutDeletedOne = tasks.filter((task) => task.id !== id)

    setTasks(tasksWithoutDeletedOne)
  }

  function findNumberOfCompletedTasks(): number {
    return tasks.filter((task) => task.done === true).length
  }

  const areThereTasks = tasks.length > 0

  return (
    <>
      <NewTask onCreateNewTask={(newTask) => createNewTask(newTask)} />
      <TasksContainer>
        <Info
          numberOfTasks={tasks.length}
          numberOfCompletedTasks={findNumberOfCompletedTasks()}
        />
        {areThereTasks ? (
          <ListContainer>
            {tasks.map((task) => (
              <Task
                key={task.id}
                {...task}
                onCheckTask={(id) => checkTask(id)}
                onUncheckTask={(id) => uncheckTask(id)}
                onDeleteTask={(id) => deleteTask(id)}
              />
            ))}
          </ListContainer>
        ) : (
          <Empty />
        )}
      </TasksContainer>
    </>
  )
}

export { Home }
