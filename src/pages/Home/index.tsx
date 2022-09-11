import { useContext } from 'react'

import { TasksContext } from '../../contexts/tasksContext'
import { Empty } from './components/Empty'
import { Info } from './components/Info'
import { NewTask } from './components/NewTask'
import { Task } from './components/Task'
import { ListContainer, TasksContainer } from './styles'

function Home() {
  const { tasks, existsTasks } = useContext(TasksContext)

  return (
    <>
      <NewTask />
      <TasksContainer>
        <Info />
        {existsTasks() ? (
          <ListContainer>
            {tasks.map((task) => (
              <Task key={task.id} {...task} />
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
