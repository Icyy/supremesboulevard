import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Image } from "mui-image";

const Banner = () => (
  <Box
    id="home"
    sx={{
      minHeight: "70vh",
      py: { xs: 5, md: 10 },
      px: { xs: 2, md: 8 },
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      gap: '9vw',
      alignItems: "center",
    }}
  >
    <Box flex={1}>
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Discover 2, 3 & 4 Bed Urban Resort Residences
      </Typography>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        Welcome to a place where families come together, friendships grow, and
        treasured memories are made.
      </Typography>
      <Typography color="text.secondary">
        This is a community that embraces what truly matters in life, where
        everyone can find something for themselves. It's a retreat where life's
        most precious moments are celebrated and cherished.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        href="#enquire-now"
        sx={{ mt: 4 }}
      >
        Enquire Now
      </Button>
    </Box>

    <Box flex={1}>
      <Image
        src="https://images.squarespace-cdn.com/content/v1/66fd0ccc95b74e6b2cb1c64d/1727859917634-CMKQVETD1IZ20CCJ7L2V/Cover.jpg"
        height="auto"
        duration={0}
        style={{
          borderRadius: 16,
          border: "1px solid #d9583c30",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
        }}
      />
    </Box>
  </Box>
);

export default Banner;
