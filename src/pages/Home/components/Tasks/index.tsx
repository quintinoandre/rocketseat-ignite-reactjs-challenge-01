import { Empty } from './components/Empty'
import { Info } from './components/Info'
import { List } from './components/List'
import { TasksContainer } from './styles'

interface ITask {
  id: string
  title: string
  done: boolean
  deadline: Date
  createdAt: Date
  userId: string
}

interface IProps {
  tasks: ITask[]
  onCheckTask: (id: String) => void
  onUncheckTask: (id: String) => void
  onDeleteTask: (id: String) => void
}

function Tasks({ tasks, onCheckTask, onUncheckTask, onDeleteTask }: IProps) {
  function findNumberOfCompletedTasks(): number {
    return tasks.filter((task) => task.done === true).length
  }

  const areThereTasks = tasks.length > 0

  return (
    <TasksContainer>
      <Info
        numberOfTasks={tasks.length}
        numberOfCompletedTasks={findNumberOfCompletedTasks()}
      />
      {areThereTasks ? (
        <List
          tasks={tasks}
          onCheckTask={onCheckTask}
          onUncheckTask={onUncheckTask}
          onDeleteTask={onDeleteTask}
        />
      ) : (
        <Empty />
      )}
    </TasksContainer>
  )
}

export { Tasks }
