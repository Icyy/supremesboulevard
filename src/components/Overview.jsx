import React from "react";
import { Box, Typography, Grid, Divider, useTheme, useMediaQuery } from "@mui/material";
import {
  Home as HomeIcon,
  LocationOn as LocationOnIcon,
  Business as BusinessIcon,
  Pool as PoolIcon,
  LocalParking as LocalParkingIcon,
  FitnessCenter as FitnessCenterIcon,
} from "@mui/icons-material";
import overviewVideo from "../assets/video2.mp4";


const Overview = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  const topIcons = [
    { icon: <HomeIcon fontSize="large" sx={{ color: "white" }} />, title: "Modern Homes", subtitle: "Spacious & well-designed" },
    { icon: <LocationOnIcon fontSize="large" sx={{ color: "white" }} />, title: "Prime Location", subtitle: "Connectivity at its best" },
    { icon: <BusinessIcon fontSize="large" sx={{ color: "white" }} />, title: "Premium Lifestyle", subtitle: "Luxury amenities" },
  ];

  const bottomIcons = [
    { icon: <PoolIcon fontSize="large" />, title: "Swimming Pool" },
    { icon: <LocalParkingIcon fontSize="large" />, title: "Parking" },
    { icon: <FitnessCenterIcon fontSize="large" />, title: "Gym" },
    { icon: <BusinessIcon fontSize="large" />, title: "Clubhouse" },
    { icon: <LocationOnIcon fontSize="large" />, title: "Green Spaces" },
  ];

  return (
    <Box
      id="overview"
      sx={{
        position: "relative",
        px: { xs: 2, md: 8 },
        py: { xs: 8, md: 12 },
        color: "white",
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Background Video */}
      <Box
        component="video"
        src={overviewVideo}
        autoPlay
        muted
        loop
        playsInline
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          opacity: 0.5, // reduce opacity
        }}
      />

      {/* Gradient Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3))",
          zIndex: 1,
        }}
      />

      {/* Content container above video + overlay */}
      <Box sx={{ position: "relative", zIndex: 2, width: "100%" }}>
        {/* Top Row: Heading + Icons */}
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4}>
            <Typography variant={isSmall ? "h4" : "h3"} fontWeight="bold">
              Project Overview
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container spacing={4} justifyContent={isSmall ? "center" : "flex-start"}>
              {topIcons.map((feat, idx) => (
                <Grid item xs={12} sm={4} key={idx}>
                  <Box sx={{ textAlign: "center" }}>
                    <Box sx={{ mb: 1 }}>{feat.icon}</Box>
                    <Typography variant="h6" fontWeight={600}>{feat.title}</Typography>
                    <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)" }}>
                      {feat.subtitle}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        {/* Divider */}
        <Box sx={{ mt: { xs: 6, md: 8 }, mb: { xs: 4, md: 6 } }}>
          <Divider sx={{ borderColor: "rgba(255,255,255,0.4)", borderWidth: "1.5px" }} />
        </Box>

        {/* Two columns texts */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" fontWeight={600}>
              Welcome to Supreme Boulevard.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.9)" }}>
              For the first time in Chembur, experience the exclusivity of resort-life comforts meticulously crafted to elevate your everyday living.
            </Typography>
          </Grid>
        </Grid>

        {/* Another Divider */}
        <Box sx={{ mt: { xs: 6, md: 8 }, mb: { xs: 4, md: 6 } }}>
          <Divider sx={{ borderColor: "rgba(255,255,255,0.4)", borderWidth: "1.5px" }} />
        </Box>

        {/* Bottom icons row */}
        <Grid container spacing={4} justifyContent="center">
          {bottomIcons.map((b, idx) => (
            <Grid item xs={6} sm={4} md={2} key={idx}>
              <Box sx={{ textAlign: "center", color: "white" }}>
                <Box sx={{ mb: 1 }}>{b.icon}</Box>
                <Typography variant="subtitle1" fontWeight={600}>
                  {b.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Overview;
