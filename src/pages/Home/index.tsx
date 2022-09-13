import { useContext } from 'react'

import { TasksContext } from '../../contexts/tasksContext'
import { Empty } from './components/Empty'
import { Info } from './components/Info'
import { NewTask } from './components/NewTask'
import { TaskRow } from './components/TaskRow'
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
            <table>
              <thead>
                <tr>
                  <th>Status</th>
                  <th>Task</th>
                  <th>Created At</th>
                  <th>Deadline</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task) => (
                  <TaskRow key={task.id} {...task} />
                ))}
              </tbody>
            </table>
          </ListContainer>
        ) : (
          <Empty />
        )}
      </TasksContainer>
    </>
  )
}

export { Home }
