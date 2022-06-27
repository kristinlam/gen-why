import React from 'react';
import Navbar from './components/Navbar';
import Routes from './Routes';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    background: {
      default: '#ffffff',
    },
    text: {
      primary: '#222222',
    },
    link: {
      textDecoration: 'none',
      color: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Roboto',
  },
});

// const theme = createTheme({
//   palette: {
//     background: {
//       default: '#222222',
//     },
//     text: {
//       primary: '#ffffff',
//     },
//     // primary: {
//     //   main: red[500],
//     // },
//     // secondary: {
//     //   main: green[500],
//     // },
//   },
// });

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
