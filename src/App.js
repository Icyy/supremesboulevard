// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Overview from "./components/Overview";
import Amenities from "./components/Amenities";
import Contact from "./components/Contact";
import { Container } from "@mui/material";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Container sx={{maxWidth:'100% !important' }}>
        <Banner />
        <Overview />
        <Amenities />
        <Faqs />
        <Contact />
      </Container>
      <Footer />
    </>
  );
};

export default App;
