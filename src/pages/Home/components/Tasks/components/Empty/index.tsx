import clipboardLogo from '../../../../../../assets/clipboard.svg'
import { EmptyContainer } from './styles'

function Empty() {
  return (
    <EmptyContainer>
      <img src={clipboardLogo} alt="Clipboard logo" />
      <div>
        <strong>You still have no tasks registered</strong>
        <p>Create tasks and organize your items to do</p>
      </div>
    </EmptyContainer>
  )
}

export { Empty }
