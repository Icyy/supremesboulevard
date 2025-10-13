import React, { useState } from "react";
import { Box, Typography, Container, Tabs, Tab, Grid } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

import fp1 from "../assets/4bhk.jpg";
import fp2 from "../assets/grand4bhk.jpg";
import fp3 from "../assets/3bhk.jpg";
import fp4 from "../assets/lux3bhk.jpg";
import fp5 from "../assets/smart3BHK.jpg";
import fp6 from "../assets/2bhk.jpg";

import socialZone from "../assets/socialZone.jpg";
import indZone from "../assets/indulgenceZone.jpg";
import gym from "../assets/fa2.jpg";
import swimming from "../assets/fa4.jpg";
import fitnessZone from "../assets/fitnessZone.jpg";
import wellbeingZone from "../assets/wellBeingZone.jpg";

const tabData = [
  { label: "Signature 4 BHK", sub: "(Wing A)", area: 758, img: fp1 },
  { label: "Grande 4 BHK", sub: "(Wing A)", area: 820, img: fp2 },
  { label: "Signature 3 BHK", sub: "(Wing A)", area: 690, img: fp3 },
  { label: "Luxe 3 BHK", sub: "(Wing B)", area: 640, img: fp4 },
  { label: "Smart 3 BHK", sub: "(Wing B)", area: 580, img: fp5 },
  { label: "2 BHK", sub: "(Wing B)", area: 520, img: fp6 },
];

const fadeSlide = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
};

const amenitiesList = [
  { title: "Social Zone", img: socialZone },
  { title: "Indulgence Zone", img: indZone },
  { title: "State-of-the-Art Gym", img: gym },
  { title: "Swimming Zone", img: swimming },
  { title: "Fitness Zone", img: fitnessZone },
  { title: "Well Being Zone", img: wellbeingZone },
];

const Amenities = () => {
  const [value, setValue] = useState(0);

  return (
    <Container id="amenities" sx={{ py: 12 }}>
      {/* Heading */}
      <Typography
        variant="h4"
        fontWeight="bold"
        align="center"
        gutterBottom
        sx={{ letterSpacing: 1 }}
      >
        Resort Life Comforts
      </Typography>
      <Typography
        variant="subtitle1"
        color="text.secondary"
        align="center"
        mb={6}
        sx={{ maxWidth: 700, mx: "auto" }}
      >
        Over 30+ luxury amenities, indulgence and activity zones, and spaces for
        well-being and social life.
      </Typography>

      {/* Amenities Gallery */}
      <Box sx={{ mb: 10 }}>
        <Typography
          variant="h5"
          align="center"
          fontWeight="bold"
          mb={4}
          sx={{ color: "#ffffffff" }}
        >
          Discover World-Class Amenities
        </Typography>

        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(6, 1fr)",
            },
            gap: 2,
          }}
        >
          {amenitiesList.map((item, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                borderRadius: 12,
                overflow: "hidden",
                position: "relative",
                cursor: "pointer",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  filter: "brightness(0.85)",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  background:
                    "linear-gradient(180deg, transparent, rgba(0,0,0,0.7))",
                  color: "white",
                  textAlign: "center",
                  py: 1,
                  fontWeight: 600,
                  fontSize: { xs: "0.8rem", sm: "0.9rem" },
                }}
              >
                {item.title}
              </Box>
            </motion.div>
          ))}
        </Grid>
      </Box>

      {/* Tabs */}
      <Tabs
        value={value}
        onChange={(e, newVal) => setValue(newVal)}
        variant="scrollable"
        scrollButtons="auto"
        textColor="inherit"
        sx={{
          borderBottom: "2px solid rgba(0,0,0,0.1)",
          mb: 6,
          "& .MuiTab-root": {
            minWidth: 120,
            fontWeight: 600,
            textTransform: "none",
          },
          "& .Mui-selected": {
            color: "#000",
          },
          "& .MuiTabs-indicator": {
            backgroundColor: "#d9583c",
            height: 3,
          },
        }}
      >
        {tabData.map((tab, index) => (
          <Tab
            key={index}
            label={
              <Box sx={{ textAlign: "center" }}>
                <Typography color="white" fontWeight={600}>
                  {tab.label}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {tab.sub}
                </Typography>
              </Box>
            }
          />
        ))}
      </Tabs>

      {/* Content Area */}
      <Grid container spacing={8} alignItems="center">
        {/* Left: Floor Plan Image */}
        <Grid item xs={12} md={6}>
          <AnimatePresence mode="wait">
            <motion.img
              key={tabData[value].img} // Animate on change
              src={tabData[value].img}
              alt={tabData[value].label}
              variants={fadeSlide}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{
                width: "100%",
                objectFit: "contain",
                border: "1px solid rgba(0,0,0,0.08)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                borderRadius: 8,
              }}
            />
          </AnimatePresence>
        </Grid>

        {/* Right: Area Info */}
        <Grid item xs={12} md={6}>
          <AnimatePresence mode="wait">
            <motion.div
              key={tabData[value].area} // Animate on change
              variants={fadeSlide}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{
                width: 320,
                height: 320,
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(245,245,245,0.6))",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(0,0,0,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                color: "#2f2f2f",
                fontWeight: "bold",
                margin: "0 auto",
                borderRadius: 8,
              }}
            >
              <Typography variant="h3" fontWeight={700}>
                {tabData[value].area}
              </Typography>
              <Typography variant="subtitle1" fontWeight={600}>
                Sqft
              </Typography>
            </motion.div>
          </AnimatePresence>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Amenities;
