import { createTheme } from '@mui/material/styles';
import { deepPurple, green } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    mode: 'light', // or 'dark' for dark mode
    primary: {
      main: deepPurple[500],
    },
    secondary: {
      main: green[500],
    },
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#ffa726',
    },
    info: {
      main: '#29b6f6',
    },
    success: {
      main: '#66bb6a',
    },
    background: {
      default: deepPurple[100],
      paper: green[100],
    },
    text: {
      primary: '#000000',
      secondary: '#757575',
      disabled: '#bdbdbd',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 400,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 400,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 400,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 400,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 400,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
    button: {
      textTransform: 'none'
    },
  },
});

export default theme;
