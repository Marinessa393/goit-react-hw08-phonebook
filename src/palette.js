import { createMuiTheme } from '@material-ui/core';
import { indigo, purple, lightGreen } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: indigo[800],
    },

    secondary: {
      main: purple[500],
    },

    default: {
      main: indigo[50],
    },

    success: {
      main: lightGreen[500],
    },
  },
});

export default theme;
