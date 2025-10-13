import React from "react";
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Image } from "mui-image";
import { motion, useReducedMotion } from "framer-motion";
import heroBG from "../assets/heroBG.jpg";
import heroSide from "../assets/bgImg.png";

const Banner = ({ onOpenEnquiry }) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));
  const reduceMotion = useReducedMotion();

  // Framer Motion variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const bgMotion = reduceMotion
    ? {}
    : {
        initial: { scale: 1.1, opacity: 0.5 },
        animate: {
          scale: 1,
          opacity: 0.5,
          transition: { duration: 1.8, ease: "easeOut" },
        },
      };

  return (
    <Box
      id="home"
      sx={{
        position: "relative",
        width: "100%",
        minHeight: isSmall ? "90vh" : "95vh",
        display: "flex",
        flexDirection: isSmall ? "column" : "row",
        alignItems: "center",
        justifyContent: "space-between",
        px: isSmall ? 3 : 10,
        py: isSmall ? 6 : 12,
        color: "#fff",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <motion.div
        {...bgMotion}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <Image src={heroBG} alt="Hero Background" fit="cover" duration={0} />
        {/* Overlay gradients */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "50%",
            background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "20%",
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.4), transparent)",
          }}
        />
      </motion.div>

      {/* Left Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          flex: 1,
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: isSmall ? "center" : "flex-start",
          textAlign: isSmall ? "center" : "left",
        }}
      >
        <motion.div variants={fadeUp}>
          <Typography
            variant={isSmall ? "h5" : "h2"}
            fontWeight="bold"
            sx={{
              lineHeight: 1.2,
              mb: 2,
              maxWidth: 600,
            }}
          >
            Discover <br /> 2, 3 & 4 Bed Urban Resort Residences
          </Typography>
        </motion.div>

        <motion.div variants={fadeUp}>
          <Typography
            variant={isSmall ? "body2" : "h6"}
            sx={{
              color: "#d0d5cf",
              maxWidth: 550,
              mb: 3,
            }}
          >
            Welcome to a place where families come together, friendships grow,
            and treasured memories are made.
          </Typography>
        </motion.div>

        <motion.div variants={fadeUp}>
          <Typography
            variant={isSmall ? "body2" : "body1"}
            sx={{
              color: "#b0b9b3",
              maxWidth: 550,
              mb: 4,
            }}
          >
            This is a community that embraces what truly matters in life, where
            everyone can find something for themselves. It's a retreat where
            life's most precious moments are celebrated and cherished.
          </Typography>
        </motion.div>

        <motion.div variants={fadeUp}>
          <Button
            variant="contained"
            onClick={onOpenEnquiry}
            sx={{
              px: isSmall ? 8 : 5,
              py: 1.5,
              fontSize: isSmall ? "1rem" : "1.2rem",
              fontWeight: 600,
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
              background: "linear-gradient(135deg, #d9583c, #b23c28)",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.03)",
                background: "linear-gradient(135deg, #b23c28, #8a2c1e)",
              },
            }}
          >
            Enquire Now
          </Button>
        </motion.div>
      </motion.div>

      {/* Right Side Image */}
      {!isSmall && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeOut" },
          }}
          style={{
            flex: 1,
            zIndex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "85%",
              height: "70vh",
              overflow: "hidden",
              border: "2px solid rgba(255,255,255,0.2)",
              boxShadow: "0px 8px 30px rgba(0,0,0,0.5)",
              position: "relative",
              transition: "transform 0.4s ease, box-shadow 0.4s ease",
              "&:hover": {
                transform: "translateY(-6px) scale(1.02)",
                boxShadow: "0px 12px 40px rgba(0,0,0,0.7)",
              },
            }}
          >
            <Image
              src={heroSide}
              alt="Luxury Apartments"
              duration={0}
              fit="cover"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "40%",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.4), transparent)",
              }}
            />
          </Box>
        </motion.div>
      )}
    </Box>
  );
};

export default Banner;
