import React from 'react';
import Navbar from './components/Navbar';
import Routes from './Routes';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFA7A6',
    },
    secondary: {
      main: '#FDE5B4',
    },
    // background: {
    //   default: '#FDE5B4',
    // },
    text: {
      primary: '#222222',
    },
    link: {
      textDecoration: 'none',
      // color: '#ffffff',
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
