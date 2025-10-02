// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Overview from "./components/Overview";
import Amenities from "./components/Amenities";
import Contact from "./components/Contact";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import VideoSection from "./components/VideoSection";
import LocationSection from "./components/LocationSection";

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Overview />
      <Amenities />
      <VideoSection />
      <LocationSection />
      <Faqs />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
