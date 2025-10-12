import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Overview from "./components/Overview";
import Amenities from "./components/Amenities";
import VideoSection from "./components/VideoSection";
import LocationSection from "./components/LocationSection";
import Faqs from "./components/Faqs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import EnquiryModal from "./components/EnquiryModal"; 
import CTABar from "./components/CTABar";
import FadeUpSection from "./components/FadeUpSection";
import { Container } from "@mui/material";

const App = () => {
  const [openEnquiry, setOpenEnquiry] = useState(false);

  const handleOpenEnquiry = () => setOpenEnquiry(true);
  const handleCloseEnquiry = () => setOpenEnquiry(false);

  return (
    <>
      <Navbar onOpenEnquiry={handleOpenEnquiry} />
      <CTABar />
      <Container sx={{ maxWidth: "100% !important" }}>
        <FadeUpSection>
          <Banner onOpenEnquiry={handleOpenEnquiry} />
        </FadeUpSection>

        <FadeUpSection delay={0.1}>
          <Overview onOpenEnquiry={handleOpenEnquiry} />
        </FadeUpSection>

        <FadeUpSection delay={0.2}>
          <Amenities />
        </FadeUpSection>

        <FadeUpSection delay={0.3}>
          <VideoSection onOpenEnquiry={handleOpenEnquiry} />
        </FadeUpSection>

        <FadeUpSection delay={0.4}>
          <LocationSection />
        </FadeUpSection>

        <FadeUpSection delay={0.5}>
          <Faqs />
        </FadeUpSection>

        <FadeUpSection delay={0.6}>
          <Contact onOpenEnquiry={handleOpenEnquiry} />
        </FadeUpSection>
      </Container>
      <Footer />
      <EnquiryModal open={openEnquiry} onClose={handleCloseEnquiry} />
    </>
  );
};

export default App;
