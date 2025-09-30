import React from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";
import {
  Home as HomeIcon,
  LocationOn as LocationOnIcon,
  Business as BusinessIcon,
  Pool as PoolIcon,
  LocalParking as LocalParkingIcon,
  FitnessCenter as FitnessCenterIcon,
  Spa as SpaIcon,
} from "@mui/icons-material";

const Overview = () => {
  const topFeatures = [
    {
      icon: <HomeIcon fontSize="large" color="primary" />,
      title: "Spacious Homes",
      subtitle: "Modern layouts designed for comfort",
    },
    {
      icon: <LocationOnIcon fontSize="large" color="primary" />,
      title: "Prime Location",
      subtitle: "Excellent connectivity to city hubs",
    },
    {
      icon: <BusinessIcon fontSize="large" color="primary" />,
      title: "Premium Lifestyle",
      subtitle: "Luxury amenities for families & professionals",
    },
  ];

  const amenities = [
    {
      icon: <PoolIcon fontSize="large" color="primary" />,
      title: "Swimming Pool",
      subtitle: "Relax and rejuvenate every day",
    },
    {
      icon: <LocalParkingIcon fontSize="large" color="primary" />,
      title: "Ample Parking",
      subtitle: "Safe & secure vehicle spaces",
    },
    {
      icon: <FitnessCenterIcon fontSize="large" color="primary" />,
      title: "Fitness Center",
      subtitle: "State-of-the-art gym facilities",
    },
    {
      icon: <SpaIcon fontSize="large" color="primary" />,
      title: "Wellness Spa",
      subtitle: "Holistic living experience",
    },
    {
      icon: <BusinessIcon fontSize="large" color="primary" />,
      title: "Clubhouse",
      subtitle: "Community events & recreation",
    },
  ];

  // Reusable divider style
  const StyledDivider = () => (
    <Divider
      sx={{
        my: { xs: 6, md: 10 },
        borderColor: "rgba(0,0,0,0.1)",
        borderWidth: "1.5px",
        width: "80%",
        mx: "auto",
      }}
    />
  );

  return (
    <Box
      id="overview"
      sx={{
        minHeight: "70vh",
        py: { xs: 5, md: 10 },
        px: { xs: 2, md: 8 },
        bgcolor:'#e4e2d3'
      }}
    >
      {/* First Row: Heading + Top 3 Features */}
      <Grid container spacing={6} alignItems="center">
        {/* Left side heading */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h4"
            fontWeight="bold"
            color="text.default"
            sx={{ mb: { xs: 3, md: 0 } }}
          >
            Project Overview
          </Typography>
        </Grid>

        {/* Right side icons */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={4} justifyContent="space-between">
            {topFeatures.map((feature, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Box sx={{ textAlign: "center" }}>
                  <Box sx={{ mb: 1 }}>{feature.icon}</Box>
                  <Typography variant="h6" color="text.default" fontWeight="600">
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.subtitle}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      <StyledDivider />

      {/* Second Row: Two column texts */}
      <Grid container spacing={6} alignItems="flex-start">
        <Grid item xs={12} md={6}>
          <Typography variant="h5" fontWeight="600" color="text.default" gutterBottom>
            Welcome to Supreme Boulevard.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" color="text.secondary">
            For the first time in Chembur, experience the exclusivity of
            resort-life comforts meticulously crafted to elevate your everyday
            living.
          </Typography>
        </Grid>
      </Grid>

      <StyledDivider />

      {/* Third Row: Amenities / Features */}
      <Grid container spacing={4} justifyContent="space-between">
        {amenities.map((amenity, index) => (
          <Grid item xs={6} sm={4} md={2.4} key={index}>
            <Box sx={{ textAlign: "center" }}>
              <Box sx={{ mb: 1 }}>{amenity.icon}</Box>
              <Typography variant="subtitle1" fontWeight="600" color="text.default">
                {amenity.title}
              </Typography>
              <Typography
                variant="caption"
                display="block"
                color="text.secondary"
              >
                {amenity.subtitle}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Overview;
