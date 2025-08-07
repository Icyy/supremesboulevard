import React from "react";
import { Box, Typography, List, ListItem, Container, Paper } from "@mui/material";

const Amenities = () => (
  <Container id="amenities" sx={{ py: 10 }}>
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
    <Paper
      elevation={3}
      sx={{
        py: 6,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.5rem",
        color: "#8ba49e",
        borderRadius: 4,
        background: "linear-gradient(to top right, #e6ded2, #8ba49e30)",
      }}
    >
      Amenities grid placeholder
    </Paper>
  </Container>
);

export default Amenities;
