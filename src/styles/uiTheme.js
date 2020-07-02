import { $primary, $text } from 'styles/colors';

const uiTheme = {
  palette: {
    primary: {
      main: $primary,
    },
    text: {
      primary: $text,
    }
  },
  typography: {
    fontFamily: 'Andes Reg',
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
};

export default uiTheme;
