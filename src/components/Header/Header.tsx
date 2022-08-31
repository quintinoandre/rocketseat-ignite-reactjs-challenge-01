import styles from './Header.module.css';

import todoLogo from '../../assets/todo-logo.svg';

function Header() {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="todo logo" />
    </header>
  );
}

export { Header };
