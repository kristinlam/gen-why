import React from 'react';
import Navbar from './components/Navbar';
import Routes from './Routes';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    primary: {
      main: '#d6ce93',
    },
    secondary: {
      main: '#a3a380',
    },
    background: {
      default: 'transparent',
    },
    text: {
      primary: '#333',
    },
  },
  typography: {
    fontFamily: 'Roboto',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
