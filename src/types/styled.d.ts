import 'styled-components';
import { ThemeType } from '../theme';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
