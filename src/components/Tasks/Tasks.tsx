import { Empty } from '../Empty';
import { Info } from '../Info';
import { List } from '../List';
import styles from './Tasks.module.css';

interface ITask {
  id: string;
  title: string;
  done: boolean;
  deadline: Date;
  createdAt: Date;
  userId: string;
}

interface IProps {
  tasks: ITask[];
  onCheckTask: (id: String) => void;
  onUncheckTask: (id: String) => void;
  onDeleteTask: (id: String) => void;
}

function Tasks({ tasks, onCheckTask, onUncheckTask, onDeleteTask }: IProps) {
  function findNumberOfCompletedTasks(): number {
    return tasks.filter((task) => task.done === true).length;
  }

  const areThereTasks = tasks.length > 0;

  return (
    <div className={styles.tasks}>
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
    </div>
  );
}

export { Tasks };
