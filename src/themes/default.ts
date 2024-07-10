import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#03D69D ',
      contrastText: '#4D4D4D',
    },
    secondary: {
      main: '#133A6F',
      light: '#B2B2B2',
    },
    success: {
      main: '#03D69D',
    },
    background: {
      default: '#FFFFFF',
      paper: '#E5E5E5',
    },
    text: {
      primary: '#4D4D4D',
      secondary: '#AFAFAF',
    },
  },
  typography: {
    fontFamily: 'Nunito, Arial, sans-serif',
  },
});

const theme = responsiveFontSizes(defaultTheme);

export default theme;
