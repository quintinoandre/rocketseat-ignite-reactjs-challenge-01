import todoLogo from '../../assets/todo-logo.svg'
import { HeaderContainer } from './styles'

function Header() {
  return (
    <HeaderContainer>
      <img src={todoLogo} alt="todo logo" />
    </HeaderContainer>
  )
}

export { Header }
