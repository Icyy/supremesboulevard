import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Tabs,
  Tab,
  Grid,
  Fade,
} from "@mui/material";

import fp1 from "../assets/4bhk.jpg";
import fp2 from "../assets/grand4bhk.jpg";
import fp3 from "../assets/3bhk.jpg";
import fp4 from "../assets/lux3bhk.jpg";
import fp5 from "../assets/smart3BHK.jpg";
import fp6 from "../assets/2bhk.jpg";

const tabData = [
  { label: "Signature 4 BHK", sub: "(Wing A)", area: 758, img: fp1 },
  { label: "Grande 4 BHK", sub: "(Wing A)", area: 820, img: fp2 },
  { label: "Signature 3 BHK", sub: "(Wing A)", area: 690, img: fp3 },
  { label: "Luxe 3 BHK", sub: "(Wing B)", area: 640, img: fp4 },
  { label: "Smart 3 BHK", sub: "(Wing B)", area: 580, img: fp5 },
  { label: "2 BHK", sub: "(Wing B)", area: 520, img: fp6 },
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
            backgroundColor: "#df8b26", // your brand orange
            height: 3,
          },
        }}
      >
        {tabData.map((tab, index) => (
          <Tab
            key={index}
            label={
              <Box sx={{ textAlign: "center" }}>
                <Typography color="white" fontWeight={600}>{tab.label}</Typography>
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
          <Fade in timeout={600}>
            <Box
              component="img"
              src={tabData[value].img}
              alt={tabData[value].label}
              sx={{
                width: "100%",
                objectFit: "contain",
                border: "1px solid rgba(0,0,0,0.08)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              }}
            />
          </Fade>
        </Grid>

        {/* Right: Area Info */}
        <Grid item xs={12} md={6}>
          <Fade in timeout={800}>
            <Box
              sx={{
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
                mx: "auto",
              }}
            >
              <Typography variant="h3" fontWeight="700">
                {tabData[value].area}
              </Typography>
              <Typography variant="subtitle1" fontWeight="600">
                Sqft
              </Typography>
            </Box>
          </Fade>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Amenities;
