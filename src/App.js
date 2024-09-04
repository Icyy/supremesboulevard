import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Overview from './components/Overview';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Banner />
      <Overview />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
