import 'styled-components'
import { DEFAULT_THEME } from '../styles/themes/default'

type ThemeType = typeof DEFAULT_THEME

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
