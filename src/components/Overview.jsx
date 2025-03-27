import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Modal,
  Card,
  CardContent,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import img1 from "../assets/img12.png";
import img2 from "../assets/img13.png";
import img3 from "../assets/img3.jpg";
import demoImg from "../assets/img3.jpg";
import fp1 from "../assets/floorplan1.png";
import fp2 from "../assets/floorplan2.png";
import fp3 from "../assets/floorplan3.png";
import fp5 from "../assets/floorplan4.png";
import fp6 from "../assets/floorplan5.png";
import fa1 from "../assets/fa1.png";
import fa2 from "../assets/fa2.jpg";
import fa3 from "../assets/fa3.jpg";
import fa4 from "../assets/fa4.jpg";
import mapsimg from "../assets/maps.png";

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
  cursor: "pointer",
};

const cardTextStyle = {
  position: "absolute",
  bottom: "10px",
  left: "10px",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  padding: "10px",
  borderRadius: "5px",
};

const overlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.4)", // Adjust opacity here
  zIndex: 0,
};

const imageBlurStyle = {
  width: "100%",
  height: "auto",
  maxHeight: "400px",
  objectFit: "cover",
  filter: "blur(1px)", // Adjust the blur level here
  cursor: "pointer",
};

const Overview = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);


  

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name,
      email,
      phone,
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
        setModalOpen(false);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again later.");
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h2" sx={{ mb: 3,color:'white' }}>
        Overview
      </Typography>

      {/* Carousel of images */}
      <Carousel>
        <img
          src={img1}
          alt="Property  1"
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "500px",
            objectFit: "contain",
          }}
        />
        <img
          src={img2}
          alt="Property  2"
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "500px",
            objectFit: "contain",
          }}
        />
        <img
          src={img3}
          alt="Property  3"
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "500px",
            objectFit: "cover",
          }}
        />
      </Carousel>

      {/* Amenities and Floor Plan */}
      <Box sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} sx={{ marginBottom: "20px" }}>
            <Typography variant="h2" sx={{ mb: 2, color:'white' }}>
              Amenities
            </Typography>
            <Typography variant="body1" pararaph>
              In Chembur, our legacy stands proud with Supreme Epitome and
              Supreme Signature - Two luxury landmarks that have raised the bar
              of premium living in the suburbs.
            </Typography>
            <br />
            <Typography pararaph>
              With Supreme Elenor, we take it a notch above! Supreme Boulevard
              will not just be another premium residences with world Class
              Ameneties .
            </Typography>
            <br />
            <Typography pararaph>
              It will be a one-of-a-kind symbol of healthy living. From elegant
              apartments to a fully-equipped gym. From ACs in every home to the
              serene pool and yoga deck. 81,000 Sqft Podium . Supreme Boulevard
              provides the unique opportunity to live a life of luxury and that
              of good health, in equal measure. Blending the best aspects of the
              fine life, the fit life and the relaxed life, Supreme Boulevard
              provides spaces where residents can fully embrace a healthy
              lifestyle, in great style.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" sx={{ mb: 2,color:'white' }}>
              Floor Plan
            </Typography>
            <Carousel>
              {[fp1, fp2, fp3,fp5,fp6].map((image, idx) => (
                <div
                  key={idx}
                  style={{
                    position: "relative",
                    height: "300px",
                    width: "100%",
                  }}
                  onClick={handleModalOpen}
                >
                  <img
                    src={image}
                    alt={`Floor Plan ${idx + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      filter: "blur(5px)",
                    }}
                  />
                </div>
              ))}
            </Carousel>
          </Grid>
        </Grid>
      </Box>

      {/* Featured Amenities */}
      <Box sx={{ mt: 4, width: "100%" }}>
        <Typography variant="h2" sx={{ mb: 2,color:'white' }}>
          Featured Amenities
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Card
                  sx={{
                    ...cardStyles,
                    backgroundImage: `url(${fa1})`,
                  }}
                >
                  <Box sx={overlayStyle} />
                  <CardContent>
                    <Typography variant="h6" sx={cardTextStyle}>
                      Elegant Apartments
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card
                  sx={{
                    ...cardStyles,
                    backgroundImage: `url(${fa2})`,
                  }}
                >
                  <Box sx={overlayStyle} />
                  <CardContent>
                    <Typography variant="h6" sx={cardTextStyle}>
                      Fully-Equipped Gym
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card
                  sx={{
                    ...cardStyles,
                    backgroundImage: `url(${fa3})`,
                  }}
                >
                  <Box sx={overlayStyle} />
                  <CardContent>
                    <Typography variant="h6" sx={cardTextStyle}>
                      ACs in Every Home
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card
                  sx={{
                    ...cardStyles,
                    backgroundImage: `url(${fa4})`,
                  }}
                >
                  <Box sx={overlayStyle} />
                  <CardContent>
                    <Typography variant="h6" sx={cardTextStyle}>
                      Serene Pool and Yoga Deck
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card
                  sx={{
                    ...cardStyles,
                    backgroundImage: `url(${demoImg})`,
                  }}
                >
                  <Box sx={overlayStyle} />
                  <CardContent>
                    <Typography variant="h6" sx={cardTextStyle}>
                      81,000 Sqft Podium
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/* Location & Connectivity */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h2" sx={{ mb: 2, color:'white' }}>
          Location & Connectivity
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <div
              style={{ position: "relative", cursor: "pointer" }}
              onClick={handleModalOpen}
            >
              <img src={mapsimg} alt="Location" style={imageBlurStyle} />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  zIndex: 1,
                }}
              />
            </div>
            <Modal open={modalOpen} onClose={handleModalClose}>
              <Box
                sx={{
                  p: 4,
                  maxWidth: 400,
                  mx: "auto",
                  mt: "10%",
                  bgcolor: "background.paper",
                  borderRadius: 2,
                  boxShadow: 24,
                }}
              >
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Request More Information
                </Typography>
                <form onSubmit={handleSubmit}>
                <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <TextField
                    label="Phone Number"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                  <Button type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
                </form>
              </Box>
            </Modal>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{borderRadius:'0px'}}>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Connectivity
                </Typography>
                <Typography variant="body1">
                  <strong>Business District</strong>
                  <br />
                  Bandra Kurla Complex – 6 km
                  <br />
                  Lower Parel Business District – 12 km
                  <br />
                  SEEPZ – 16 km
                  <br />
                  Nariman Point – 20 km
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{borderRadius:'0px'}}>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  About Us
                </Typography>
                <Typography variant="body1">
                  Supreme Universal is one of the prominent luxury developers in
                  Mumbai and Pune. Since its inception in 1982, it has till now
                  delivered 60+ projects in Mumbai and 10+ projects in Pune
                  across residential and commercial sectors. The developer has
                  been redefining spaces with its distinctive architecture and
                  construction techniques.
                </Typography>
                <Typography variant="body1">RERA No: A51900004566</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid>
            <Card sx={{borderRadius:'0px'}}>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Disclaimer:
                </Typography>
                <Typography variant="body1">
                  We are an authorized marketing partner for this project. The
                  information provided on this website is sourced from the
                  respective owners and is intended for informational purposes
                  only. It does not constitute an offer to avail any services.
                  This is not the official website. Website maintained by
                  Authorized Markerting Channel Partner Maha Rera No
                  A51900004566. By providing your details, you agree to receive
                  calls, SMS, or emails regarding your inquiry. 
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Overview;
