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
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import img1 from "../assets/bgImg.png";
import bhk2 from "../assets/2bhk.png";
import bhk3 from "../assets/3bhk.jpg";
import bhk3l from "../assets/3bhkl.jpg";
import demoVideo from "../assets/video1.mp4";
import bannerVideo from "../assets/video2.mp4";

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
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
  transition: "transform 0.3s, box-shadow 0.3s",
  cursor: "pointer",
};

const overlayStyles = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 1,
};

const Banner = () => {
  const [open, setOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [selectedApartment, setSelectedApartment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleClickOpen = (apartment) => {
    setSelectedApartment(apartment);
    setOpen(true);
  };

  const handleButtonClick = () => {
    setSelectedApartment("Booking Inquiry");
    setOpen(true);
  };

  const handleVideoOpen = () => {
    setVideoOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setVideoOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

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
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${img1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: { xs: "1400px", md: "1000px" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0 0",
        position: "relative",
        color: "#ffffff",
        textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          zIndex: 1,
        }}
      />

      <Box sx={{ position: "relative", zIndex: 2, maxWidth: "1200px" }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            mb: 2,
            fontSize: { xs: "2rem", md: "3rem" },
            color: "white",
          }}
        >
          New Launch in Chembur by Supreme!
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: "300", mb: 4 }}>
          Luxury apartments in the heart of Chembur
        </Typography>

        <Grid container spacing={4} justifyContent="center" sx={{ mb: 4 }}>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              5 Acres of Land
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              34-storey, 4 towers
            </Typography>
          </Grid>
        </Grid>

        {/* Video component after 34-storey, 4 towers */}
        <Box
          sx={{
            width: "100%",
            height: "auto",
            mb: 4,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <video
            controls
            autoPlay
            muted 
            loop
            style={{
              width: "100%",
              maxWidth: "800px",
              maxHeight: "auto",
              objectFit: "cover",
            }}
          >
            <source src={bannerVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {[["2BHK - 727.75 + 30.24 sq ft", bhk3l], ["Smart 3BHK - 881.78 + 56.18 sq ft", bhk3], ["Lux 3BHK - 1004.17 + 61.24 sq ft", bhk2]].map(([title, img], index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  ...cardStyles,
                  backgroundImage: `url(${img})`,
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.7)",
                  },
                }}
                onClick={() => handleClickOpen(title)}
              >
                <Box sx={overlayStyles} />
                <CardContent sx={{ position: "relative", zIndex: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 2,
            mt: 3,
          }}
        >
          <Button
            variant="contained"
            onClick={handleButtonClick}
            sx={{
              backgroundColor: "#ff9800",
              "&:hover": { backgroundColor: "#e67e22" },
            }}
          >
            Click here to book now
          </Button>
          <Button variant="contained" color="secondary" onClick={handleVideoOpen}>
            Online Demo Flat Tour
          </Button>
        </Box>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Contact Us for More Details on {selectedApartment}</DialogTitle>
          <DialogContent>
            <form onSubmit={handleSubmit}>
              <TextField label="Name" fullWidth sx={{ mb: 2 }} value={name} onChange={(e) => setName(e.target.value)} required />
              <TextField label="Email" type="email" fullWidth sx={{ mb: 2 }} value={email} onChange={(e) => setEmail(e.target.value)} required />
              <TextField label="Mobile Number" type="tel" fullWidth value={phone} onChange={(e) => /^\d{0,10}$/.test(e.target.value) && setPhone(e.target.value)} required />
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit">Submit</Button>
              </DialogActions>
            </form>
          </DialogContent>
        </Dialog>

        <Dialog open={videoOpen} onClose={handleClose} maxWidth="md" sx={{ "& .MuiDialog-paper": { height: "100vh", overflow: "hidden" } }}>
          <DialogTitle>
            Online Demo Flat Tour
            <IconButton onClick={handleClose} sx={{ position: "absolute", right: 10, top: 10 }}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent sx={{ height: "calc(100vh - 64px)", overflow: "hidden" }}>
            <video style={{ width: "100%", height: "100%" }} controls autoPlay>
              <source src={demoVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </DialogContent>
        </Dialog>
      </Box>
    </Box>
  );
};

export default Banner;
