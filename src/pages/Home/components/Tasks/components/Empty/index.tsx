import clipboardLogo from '../../../../../../assets/clipboard.svg'
import styles from './Empty.module.css'

function Empty() {
  return (
    <div className={styles.empty}>
      <img src={clipboardLogo} alt="Clipboard logo" />
      <div>
        <strong>You still have no tasks registered</strong>
        <p>Create tasks and organize your items to do</p>
      </div>
    </div>
  )
}

export { Empty }
