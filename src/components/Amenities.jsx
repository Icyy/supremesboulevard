import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Paper,
  Tabs,
  Tab,
  Grid,
} from "@mui/material";

import fp1 from '../assets/4bhk.jpg'
import fp2 from '../assets/grand4bhk.jpg'
import fp3 from '../assets/3bhk.jpg'
import fp4 from '../assets/lux3bhk.jpg'
import fp5 from '../assets/smart3BHK.jpg'
import fp6 from '../assets/2bhk.jpg'



const tabData = [
  {
    label: "Signature 4 BHK",
    sub: "(Wing A)",
    area: 758,
    img: fp1,
  },
  {
    label: "Grande 4 BHK",
    sub: "(Wing A)",
    area: 820,
    img: fp2,
  },
  {
    label: "Signature 3 BHK",
    sub: "(Wing A)",
    area: 690,
    img: fp3,
  },
  {
    label: "Luxe 3 BHK",
    sub: "(Wing B)",
    area: 640,
    img: fp4,
  },
  {
    label: "Smart 3 BHK",
    sub: "(Wing B)",
    area: 580,
    img: fp5,
  },
  {
    label: "2 BHK",
    sub: "(Wing B)",
    area: 520,
    img: fp6,
  },
];

const Amenities = () => {
  const [value, setValue] = useState(0);

  return (
    <Container id="amenities" sx={{ py: 10 }}>
      {/* Heading */}
      <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
        Resort Life Comforts
      </Typography>
      <Typography
        variant="subtitle1"
        color="text.secondary"
        align="center"
        mb={5}
      >
        Over 30+ luxury amenities, indulgence and activity zones, and spaces for
        well-being and social life.
      </Typography>

      {/* Tabs */}
      <Paper
        elevation={3}
        sx={{
          borderRadius: 4,
          overflow: "hidden",
          mb: 5,
          // background: "linear-gradient(to top right, #e6ded2, #8ba49e30)",
        }}
      >
        <Tabs
          value={value}
          onChange={(e, newVal) => setValue(newVal)}
          variant="scrollable"
          scrollButtons="true"
          textColor="primary"
          indicatorColor="primary"
          sx={{ display:'flex', px: 2, justifyContent:'space-between' }}
        >
          {tabData.map((tab, index) => (
            <Tab
              key={index}
              sx={{justifyContent:'space-between'}}
              label={
                <Box sx={{ textAlign: "center", justifyContent:'space-between' }}>
                  <Typography fontWeight={600}>{tab.label}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {tab.sub}
                  </Typography>
                </Box>
              }
            />
          ))}
        </Tabs>
      </Paper>

      {/* Content Area */}
      <Paper
        elevation={3}
        sx={{
          py: 6,
          px: { xs: 2, md: 6 },
          borderRadius: 4,
          background: "linear-gradient(to top right, #f8f6f2, #ffffff)",
        }}
      >
        <Grid container spacing={6} alignItems="center">
          {/* Left: Floor Plan Image */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={tabData[value].img}
              alt={tabData[value].label}
              sx={{
                width: "100%",
                borderRadius: 2,
                boxShadow: 3,
                objectFit: "contain",
              }}
            />
          </Grid>

          {/* Right: Area Info */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  width: 300,
                  height: 300,
                  borderRadius: "20px",
                  background: "linear-gradient(135deg, #e6ded2, #8ba49e50)",
                  display: "flex",
                  alignItems: "center",
                  flexDirection:'column',
                  justifyContent: "center",
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "#2f2f2f",
                  mb: 1,
                  boxShadow: 2,
                }}
              >
                <Box>{tabData[value].area}</Box>
                <Box>
                  <Typography variant="subtitle1" fontWeight="600">
                    Sqft
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Amenities;
