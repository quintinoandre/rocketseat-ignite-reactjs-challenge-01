import { createContext, ReactNode, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'

import {
  checkTaskAction,
  createNewTaskAction,
  deleteTaskAction,
  uncheckTaskAction,
} from '../reducers/tasks/actions'
import { ITask, tasksReducer } from '../reducers/tasks/reducer'

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

interface ICreateNewTaskProps {
  title: string
}

interface ITasksContextProps {
  tasks: ITask[]
  createNewTask: (data: ICreateNewTaskProps) => void
  checkTask: (id: string) => void
  uncheckTask: (id: string) => void
  deleteTask: (id: string) => void
  findNumberOfTasks: () => number
  findNumberOfCompletedTasks: () => number
  existsTasks: () => boolean
}

const TasksContext = createContext({} as ITasksContextProps)

interface IProps {
  children: ReactNode
}

function TasksContextProvider({ children }: IProps) {
  const [tasksState, dispatch] = useReducer(tasksReducer, {
    tasks: [...mockTasks],
  })

  const { tasks } = tasksState

  function createNewTask({ title }: ICreateNewTaskProps) {
    const newTask: ITask = {
      id: uuidv4(),
      title,
      done: false,
      deadline: new Date(),
      createdAt: new Date(),
      userId: uuidv4(),
    }

    dispatch(createNewTaskAction(newTask))
  }

  function checkTask(id: string) {
    dispatch(checkTaskAction(id))
  }

  function uncheckTask(id: string) {
    dispatch(uncheckTaskAction(id))
  }

  function deleteTask(id: string) {
    dispatch(deleteTaskAction(id))
  }

  function findNumberOfTasks(): number {
    return tasks.length
  }

  function findNumberOfCompletedTasks(): number {
    return tasks.filter((task) => task.done === true).length
  }

  function existsTasks(): boolean {
    return tasks.length > 0
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        createNewTask,
        checkTask,
        uncheckTask,
        deleteTask,
        findNumberOfTasks,
        findNumberOfCompletedTasks,
        existsTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}

export { TasksContext, TasksContextProvider }
