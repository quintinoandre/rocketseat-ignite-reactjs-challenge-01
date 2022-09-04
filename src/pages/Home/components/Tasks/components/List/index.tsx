import { Task } from './components/Task'
import styles from './List.module.css'

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
    <div className={styles.list}>
      {tasks.map((task) => (
        <Task
          key={task.id}
          {...task}
          onCheckTask={onCheckTask}
          onUncheckTask={onUncheckTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  )
}

export { List }
