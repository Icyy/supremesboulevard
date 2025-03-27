import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Box } from '@mui/material'; 
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
      
      {/* Responsive Layout */}
      <Container maxWidth="xl"> 
        <Box sx={{ my: { xs: 6, md: 4 }, mr:0, ml:0 }}> 
          <Banner />
        </Box>
        <Box sx={{ my: { xs: 2, md: 4 } }}>
          <Overview />
        </Box>
      </Container>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
