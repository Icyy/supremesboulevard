import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Container, Box } from "@mui/material";
import theme from "./theme";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Overview from "./components/Overview";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ backgroundColor: "rgba(5, 5, 5, 0.93)" }}>
          <Navbar />
          <Banner />
          <Box sx={{ my: { xs: 2, md: 4 } }}>
            <Overview />
          </Box>
          <Footer />
        </Box>
      </ThemeProvider>
    </ThemeProvider>
  );
}

export default App;
