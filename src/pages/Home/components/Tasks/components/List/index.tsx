import { Task } from './components/Task'
import { ListContainer } from './styles'

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

function List({ tasks, onCheckTask, onUncheckTask, onDeleteTask }: IProps) {
  return (
    <ListContainer>
      {tasks.map((task) => (
        <Task
          key={task.id}
          {...task}
          onCheckTask={onCheckTask}
          onUncheckTask={onUncheckTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ListContainer>
  )
}

export { List }
