import { ThemeProvider } from 'styled-components'

import { TasksContextProvider } from './contexts/tasksContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { DEFAULT_THEME } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={DEFAULT_THEME}>
      <TasksContextProvider>
        <Router />
      </TasksContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export { App }
