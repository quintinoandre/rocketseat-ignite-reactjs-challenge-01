import { Check, Circle, Trash } from 'phosphor-react'

import styles from './Task.module.css'

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
    <div className={styles.task}>
      {done ? (
        <button
          className={styles.checkCircle}
          onClick={handleUncheckTask}
          title="Mark the task as not done"
        >
          <Check size={24} />
        </button>
      ) : (
        <button
          className={styles.circle}
          onClick={handleCheckTask}
          title="Mark the task as done"
        >
          <Circle size={24} />
        </button>
      )}
      <p className={done ? styles.done : styles.notDone}>{title}</p>
      <button
        className={styles.trash}
        onClick={handleDeleteTask}
        title="Delete task"
      >
        <Trash size={24} />
      </button>
    </div>
  )
}

export { Task }
