const theme = {
  PRIMARY: '#084B8A',
  BUTTON_PRIMARY: '#ABCCEC',
  BUTTON_DEFAULT_FONT: '#435A6F',
  LIGHT_BLUE: '#DBEAF7',
  FIX_INNER: '#66788A',
  WHITE: '#FAFAFA',
  PRIMARY_FONT: '#3486D2',
  ERROR: '#EC4C47',
  BORDER_BOTTOM: '#EEEEEE',
  DISABLED_BLUE: 'rgba(87, 154, 218, 0.5)',
} as const;

export type ThemeType = typeof theme;

export default theme;
