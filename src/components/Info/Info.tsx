import styles from './Info.module.css';

interface IProps {
  numberOfTasks: number;
  numberOfCompletedTasks: number;
}

function Info({ numberOfTasks, numberOfCompletedTasks }: IProps) {
  return (
    <div className={styles.info}>
      <div className={styles.created}>
        Tasks created
        <span>{numberOfTasks}</span>
      </div>
      <div className={styles.done}>
        Completed
        <span>
          {numberOfCompletedTasks} de {numberOfTasks}
        </span>
      </div>
    </div>
  );
}

export { Info };
