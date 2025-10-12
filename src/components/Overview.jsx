import React from "react";
import { Box, Typography, Grid, Divider, useTheme, useMediaQuery, Button } from "@mui/material";
import {
  Home as HomeIcon,
  LocationOn as LocationOnIcon,
  Business as BusinessIcon,
  Pool as PoolIcon,
  LocalParking as LocalParkingIcon,
  FitnessCenter as FitnessCenterIcon,
} from "@mui/icons-material";
import { motion, useReducedMotion } from "framer-motion";
import overviewVideo from "../assets/video2.mp4";

const Overview = ({ onOpenEnquiry }) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));
  const reduceMotion = useReducedMotion();

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

  // Motion variants
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

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
          opacity: 0.5,
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

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        style={{ position: "relative", zIndex: 2, width: "100%" }}
      >
        {/* Top Row: Heading + Icons */}
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4}>
            <motion.div variants={fadeUp}>
              <Typography variant={isSmall ? "h4" : "h3"} fontWeight="bold">
                Project Overview
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container spacing={4} justifyContent={isSmall ? "center" : "flex-start"}>
              {topIcons.map((feat, idx) => (
                <Grid item xs={12} sm={4} key={idx}>
                  <motion.div variants={fadeUp}>
                    <Box sx={{ textAlign: "center" }}>
                      <Box sx={{ mb: 1 }}>{feat.icon}</Box>
                      <Typography variant="h6" fontWeight={600}>
                        {feat.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)" }}>
                        {feat.subtitle}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        {/* Divider */}
        <motion.div variants={fadeUp}>
          <Box sx={{ mt: { xs: 6, md: 8 }, mb: { xs: 4, md: 6 } }}>
            <Divider sx={{ borderColor: "rgba(255,255,255,0.4)", borderWidth: "1.5px" }} />
          </Box>
        </motion.div>

        {/* Two-column Text */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div variants={fadeUp}>
              <Typography variant="h5" fontWeight={600}>
                Welcome to Supreme Boulevard.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div variants={fadeUp}>
              <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.9)" }}>
                For the first time in Chembur, experience the exclusivity of resort-life comforts meticulously crafted to elevate your everyday living.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>

        {/* Another Divider */}
        <motion.div variants={fadeUp}>
          <Box sx={{ mt: { xs: 6, md: 8 }, mb: { xs: 4, md: 6 } }}>
            <Divider sx={{ borderColor: "rgba(255,255,255,0.4)", borderWidth: "1.5px" }} />
          </Box>
        </motion.div>

        {/* Bottom Icons Row */}
        <Grid container spacing={4} justifyContent="center">
          {bottomIcons.map((b, idx) => (
            <Grid item xs={6} sm={4} md={2} key={idx}>
              <motion.div variants={fadeUp}>
                <Box sx={{ textAlign: "center", color: "white" }}>
                  <Box sx={{ mb: 1 }}>{b.icon}</Box>
                  <Typography variant="subtitle1" fontWeight={600}>
                    {b.title}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* CTA Button */}
        <motion.div variants={fadeUp} style={{ textAlign: "center", marginTop: 40 }}>
          <Button
            variant="contained"
            onClick={onOpenEnquiry}
            sx={{
              background: "linear-gradient(135deg, #d9583c, #b23c28)",
              "&:hover": { background: "linear-gradient(135deg, #b23c28, #8a2c1e)" },
              px: 4,
              py: 1.2,
              fontWeight: 600,
              fontSize: "1rem",
            }}
          >
            Schedule a Free Site Visit
          </Button>
          <Typography variant="body2" mt={2}>
            or call us directly at{" "}
            <a href="tel:+919876543210" style={{ color: "#d9583c", fontWeight: 600 }}>
              +91 98765 43210
            </a>
          </Typography>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default Overview;
