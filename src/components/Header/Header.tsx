import todoLogo from '../../assets/todo-logo.svg'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="todo logo" />
    </header>
  )
}

export { Header }
