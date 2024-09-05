import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";
import img1 from "../assets/img1.jpeg"; // Import the local image
import img2 from '../assets/im2.jpeg'
import img3 from "../assets/img3.jpg";
import bhk2 from "../assets/2bhk.png";
import bhk3 from "../assets/3bhk.jpg";
import bhk3l from "../assets/3bhkl.jpg";

const cardStyles = {
  height: "200px",
  width: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
  position: "relative",
  overflow: "hidden",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)", // Drop shadow
  transition: "transform 0.3s, box-shadow 0.3s", // Smooth transition
};

const cardHoverStyles = {
  transform: "scale(1.05)", // Zoom effect
  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.7)", // Enhanced shadow on hover
};

const overlayStyles = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
  zIndex: 1,
};

const Banner = () => {
  const [open, setOpen] = useState(false);
  const [selectedApartment, setSelectedApartment] = useState("");

  const handleClickOpen = (apartment) => {
    setSelectedApartment(apartment);
    setOpen(true);
  };

  const handleButtonClick = () => {
    setSelectedApartment('Booking Inquiry'); // Or any other placeholder
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    setOpen(false);
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${img1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: { xs: "800px", md: "700px" }, // Responsive height
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0 20px",
        position: "relative", // To position overlay if needed
        color: "#ffffff", // White text for the banner
        textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
      }}
    >
      {/* Optional Overlay for better text readability */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent overlay
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1200px",
          color: "white",
        }}
      >
        {/* Main Heading */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            mb: 2,
            fontSize: { xs: "2rem", md: "3rem" },
            color: "white",
          }}
        >
          We're thrilled to announce a New Launch in Chembur by Supreme!
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "300",
            mb: 4,
            fontSize: { xs: "1.2rem", md: "1.5rem" },
          }}
        >
          Luxury apartments in the heart of Chembur
        </Typography>

        {/* Key Details */}
        <Grid container spacing={4} justifyContent="center" sx={{ mb: 4 }}>
          <Grid item xs={12} md={2}>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: "white" }}
            >
              <strong>5 Acres of Land</strong>
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: "white" }}
            >
              <strong>34-storey, 4 towers</strong>
            </Typography>
          </Grid>
        </Grid>

        {/* Apartment Details as Clickable Cards */}
        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{ marginTop: "20px", marginBottom: "20px" }}
        >
          <Grid item xs={12} md={4}>
            <Card
              sx={{ ...cardStyles, backgroundImage: `url(${bhk3l})` }}
              onClick={() => handleClickOpen("2BHK - 758 + 758 sq ft")}
              className="card"
            >
              <Box sx={overlayStyles} />
              <CardContent sx={{ position: "relative", zIndex: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  2BHK - 758 + 758 sq ft
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              sx={{ ...cardStyles, backgroundImage: `url(${bhk3})` }}
              onClick={() => handleClickOpen("Smart 3BHK - 938 + 938 sq ft")}
              className="card"
            >
              <Box sx={overlayStyles} />
              <CardContent sx={{ position: "relative", zIndex: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Smart 3BHK - 938 + 938 sq ft
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              sx={{ ...cardStyles, backgroundImage: `url(${bhk2})` }}
              onClick={() => handleClickOpen("Large 3BHK - 1065 + 1065 sq ft")}
              className="card"
            >
              <Box sx={overlayStyles} />
              <CardContent sx={{ position: "relative", zIndex: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Large 3BHK - 1065 + 1065 sq ft
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Call to Action */}
        <Button
          variant="contained"
          color="secondary"
          sx={{
            px: 4,
            py: 1.5,
            fontSize: { xs: "0.9rem", md: "1rem" },
            textTransform: "none", // Keeps the button text case as is
            mb: 2,
            color: "black",
            fontWeight:'bold',
            borderRadius:'0px'
          }}
          onClick={handleButtonClick} // Opens popup on click
        >
          Click here to book now
        </Button>
        <Typography
          variant="body2"
          sx={{
            mt: 2,
            fontStyle: "italic",
            fontSize: { xs: "0.8rem", md: "0.9rem" },
            marginTop: "0px",
          }}
        >
          Move in within 3 years!
        </Typography>
      </Box>

      {/* Dialog for Email and Mobile Number */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          Contact Us for More Details on {selectedApartment}
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              autoFocus
              margin="dense"
              label="Email Address"
              type="email"
              fullWidth
              required
            />
            <TextField
              margin="dense"
              label="Mobile Number"
              type="tel"
              fullWidth
              required
            />
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit">Submit</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>

      <style jsx>{`
        .card:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.7);
        }
      `}</style>
    </Box>
  );
};

export default Banner;
