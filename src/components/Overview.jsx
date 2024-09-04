import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  IconButton,
  TextField,
  Button,
  Modal,
  Card,
  CardContent,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import MapIcon from "@mui/icons-material/Map"; // Add an icon for the map
import GoogleMapReact from "google-map-react"; // Import Google Map component
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/im2.jpeg";
import img3 from "../assets/img3.jpg";
import demoImg from "../assets/img3.jpg"; // Placeholder image for amenities

const cardStyles = {
  height: '200px',
  width: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
  position: 'relative',
  cursor: 'pointer',
};

const cardTextStyle = {
  position: 'absolute',
  bottom: '10px',
  left: '10px',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  padding: '10px',
  borderRadius: '5px',
};

const Overview = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setModalOpen(false);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Overview
      </Typography>

      {/* Carousel of images */}
      <Carousel>
        <img
          src={img1}
          alt="Property Image 1"
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "500px",
            objectFit: "cover",
          }}
        />
        <img
          src={img2}
          alt="Property Image 2"
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "500px",
            objectFit: "cover",
          }}
        />
        <img
          src={img3}
          alt="Property Image 3"
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
        <Typography variant="h5" sx={{ mb: 2 }}>
          Amenities & Details
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph>
              Supreme Boulevard will not just be another premium residence with
              world-class amenities. It will be a one-of-a-kind symbol of
              healthy living.
            </Typography>
            <Typography variant="body1" paragraph>
              <ul>
                <li>Elegant Apartments</li>
                <li>Fully-Equipped Gym</li>
                <li>ACs in Every Home</li>
                <li>Serene Pool and Yoga Deck</li>
                <li>81,000 Sqft Podium</li>
              </ul>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            {/* Placeholder for Floor Plan Image */}
            <img
              src="/floor-plan-demo.jpg"
              alt="Floor Plan"
              style={{ width: "100%" }}
            />
          </Grid>
        </Grid>

        {/* Amenities Cards */}
        <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
          Featured Amenities
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                ...cardStyles,
                backgroundImage: `url(${demoImg})`,
              }}
              onClick={() => handleModalOpen()} // Open modal on click
            >
              <CardContent>
                <Typography variant="h6" sx={{ ...cardTextStyle }}>
                  Elegant Apartments
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
              onClick={() => handleModalOpen()} // Open modal on click
            >
              <CardContent>
                <Typography variant="h6" sx={{ ...cardTextStyle }}>
                  Fully-Equipped Gym
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
              onClick={() => handleModalOpen()} // Open modal on click
            >
              <CardContent>
                <Typography variant="h6" sx={{ ...cardTextStyle }}>
                  ACs in Every Home
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
              onClick={() => handleModalOpen()} // Open modal on click
            >
              <CardContent>
                <Typography variant="h6" sx={{ ...cardTextStyle }}>
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
              onClick={() => handleModalOpen()} // Open modal on click
            >
              <CardContent>
                <Typography variant="h6" sx={{ ...cardTextStyle }}>
                  81,000 Sqft Podium
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Google Maps and Location Details */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Location & Connectivity
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <div style={{ height: "400px", width: "100%" }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: "YOUR_GOOGLE_MAPS_API_KEY" }}
                defaultCenter={{ lat: 19.076, lng: 72.8777 }} // Replace with your property location
                defaultZoom={15}
                onClick={handleModalOpen}
              >
                <MapIcon lat={19.076} lng={72.8777} />
              </GoogleMapReact>
            </div>
            <Modal open={modalOpen} onClose={handleModalClose}>
              <Box
                sx={{
                  p: 4,
                  maxWidth: 400,
                  mx: "auto",
                  mt: "10%",
                  bgcolor: "background.paper", // Background color
                  borderRadius: 2,
                  boxShadow: 24,
                }}
              >
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Request More Information
                </Typography>
                <form onSubmit={handleSubmit}>
                  <TextField
                    label="Email"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <TextField
                    label="Phone Number"
                    fullWidth
                    margin="normal"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                  >
                    Submit
                  </Button>
                </form>
              </Box>
            </Modal>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
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
                <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
                  Shopping Malls
                </Typography>
                <Typography variant="body1">
                  Shoppers’ Stop – 2 km
                  <br />
                  K Star Mall - 2 km
                  <br />
                  R-City Mall - 7 km
                  <br />
                  Phoenix Market City - 6 km
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
