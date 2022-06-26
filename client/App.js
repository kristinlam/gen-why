import React from 'react';
import Navbar from './components/Navbar';
import Routes from './Routes';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    background: {
      default: '#222222',
    },
    text: {
      primary: '#ffffff',
    },
    link: {
      textDecoration: 'none',
      color: '#ffffff',
    },
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
      <div>
        <Navbar />
        <Routes />
      </div>
    </ThemeProvider>
  );
};

export default App;
