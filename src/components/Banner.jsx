import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Grid,
  Card,
  CardMedia,
  CardContent,
  DialogActions,
  IconButton,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import img1 from "../assets/bgImg.png";
import bhk2 from "../assets/2bhk.png";
import bhk3 from "../assets/3bhk.jpg";
import bhk3l from "../assets/3bhkl.jpg";
import demoVideo from "../assets/video1.mp4";
import bannerVideo from "../assets/video2.mp4";

const Banner = () => {
  const [open, setOpen] = useState(false);

  const [selectedApartment, setSelectedApartment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [videoOpen, setVideoOpen] = useState(false);

  const handleDialogOpen = () => setOpen(true);
  const handleDialogClose = () => setOpen(false);

  const handleClickOpen = (apartment) => {
    setSelectedApartment(apartment);
    setOpen(true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      phone,
      apartment: selectedApartment,
    };

    try {
      const response = await fetch("https://formspree.io/f/xovejdwz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully! We'll get in touch soon.");
        setName("");
        setEmail("");
        setPhone("");
        setOpen(false);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again later.");
    }
    handleDialogClose();
  };

  const handleVideoOpen = () => {
    setVideoOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setVideoOpen(false);
  };

  return (
    <Box sx={{ py: 6, px: 2 }}>
      {/* Headline */}
      <Typography
        variant="h3"
        align="center"
        sx={{
          fontWeight: "bold",
          color: "#fff",
          mb: 2,
          fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
        }}
      >
        Crafted by Supreme – Built to Last a Lifetime
      </Typography>

      {/* Subheadline */}
      <Typography
        variant="h6"
        align="center"
        sx={{ color: "#fff", mb: 3, fontSize: { xs: "1rem", md: "1.25rem" } }}
      >
        Premium 2, 3 & 4 BHK residences that reflect your success and your style.
      </Typography>

      {/* Feature Bullets */}
      <Grid container spacing={2} justifyContent="center" sx={{ mb: 4 }}>
        {["5 Acres of Land", "34-storey, 4 towers"].map((item, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <Typography variant="body1" align="center" sx={{ color: "#fff" }}>
              {item}
            </Typography>
          </Grid>
        ))}
      </Grid>

      {/* Embedded Video */}
      <Box sx={{ width: "100%", px: 2, mb: 4 }}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "900px",
            aspectRatio: "16 / 9",
            mx: "auto",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <video
            src={bannerVideo}
            autoPlay
            muted
            loop
            playsInline
            controls
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
      </Box>

      {/* Enquire Now Button */}
      <Box textAlign="center" sx={{ mb: 4 }}>
        <Button
          variant="contained"
          onClick={handleDialogOpen}
          sx={{
            backgroundColor: "rgb(223, 139, 38)",
            color: "black",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "rgb(193, 119, 30)" },
            marginRight:'20px'
          }}
        >
          Enquire
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "rgb(223, 139, 38)",
            color: "black",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "rgb(193, 119, 30)" },
          }}
          onClick={handleVideoOpen}
        >
          Flat Tour
        </Button>
      </Box>

      {/* Apartment Cards */}
      <Grid container spacing={3} justifyContent="center" sx={{ mb: 5 }}>
        {[
          ["2BHK - 727.75 + 30.24 sq ft", bhk2],
          ["Smart 3BHK - 881.78 + 56.18 sq ft", bhk3],
          ["Lux 3BHK - 1004.17 + 61.24 sq ft", bhk3l],
        ].map(([title, img], index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{cursor:'pointer'}}>
            <Card
              sx={{ backgroundColor: "#fff", borderRadius: 2 }}
              onClick={() => handleClickOpen(title)}
            >
              <CardMedia component="img" height="200" image={img} alt={title} />
              <CardContent>
                <Typography
                  variant="subtitle1"
                  align="center"
                  sx={{ fontWeight: "bold" }}
                >
                  {title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Dialog Form */}
      <Dialog open={open} onClose={handleDialogClose}>
        <DialogTitle sx={{ fontWeight: "bold" }}>Enquire Now</DialogTitle>
        <DialogContent>
          <Box
            component="form"
            onSubmit={handleFormSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}
          >
            <TextField
              autoFocus
              required
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              variant="outlined"
            />
            <TextField
              required
              label="Mobile Number"
              type="tel"
              fullWidth
              value={phone}
              onChange={(e) =>
                /^\d{0,10}$/.test(e.target.value) && setPhone(e.target.value)
              }
              variant="outlined"
              inputProps={{ maxLength: 10, pattern: "[0-9]{10}" }}
            />
            <TextField
              required
              label="Email"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
            />
            <DialogActions sx={{ justifyContent: "space-between", px: 0 }}>
              <Button onClick={handleDialogClose}>Cancel</Button>
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </DialogActions>
          </Box>
        </DialogContent>
      </Dialog>

      <Dialog
        open={videoOpen}
        onClose={handleClose}
        maxWidth="md"
        sx={{ "& .MuiDialog-paper": { height: "100vh", overflow: "hidden" } }}
      >
        <DialogTitle>
          Online Demo Flat Tour
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", right: 10, top: 10 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent
          sx={{ height: "calc(100vh - 64px)", overflow: "hidden" }}
        >
          <video style={{ width: "100%", height: "100%" }} controls autoPlay muted>
            <source src={demoVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Banner;
