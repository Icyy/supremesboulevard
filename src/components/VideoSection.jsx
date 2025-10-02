import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  IconButton,
  useTheme,
  useMediaQuery,
  Dialog,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// Yet Another React Lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import interiorVideo from "../assets/video1.mp4";

// Dynamically import all interior images
const importAll = (r) => r.keys().map(r);
const galleryImages = importAll(
  require.context("../assets", false, /interior\d+\.jpg$/)
).map((src) => ({ src }));

const VideoSection = () => {
  const [openVideo, setOpenVideo] = useState(false);
  const [openGalleryModal, setOpenGalleryModal] = useState(false); // thumbnails
  const [openLightbox, setOpenLightbox] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const handleThumbnailClick = (index) => {
    setPhotoIndex(index);
    setOpenLightbox(true);
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: { xs: "50vh", sm: "60vh", md: "80vh" },
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
      }}
    >
      {/* Background video */}
      <Box
        component="video"
        src={interiorVideo}
        autoPlay
        loop
        muted
        playsInline
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          top: 0,
          left: 0,
          zIndex: 0,
          filter: "brightness(50%)",
        }}
      />

      {/* Overlay content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          px: { xs: 2, sm: 4, md: 10 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant={isSmall ? "h5" : isMedium ? "h4" : "h3"}
          fontWeight="bold"
          gutterBottom
        >
          Explore Interior & Exterior Spaces
        </Typography>
        <Typography
          variant={isSmall ? "body2" : isMedium ? "body1" : "h6"}
          mb={4}
          sx={{ maxWidth: 600 }}
        >
          Experience thoughtfully designed spaces crafted for modern living.
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpenVideo(true)}
            sx={{ fontWeight: "bold", px: { xs: 2, sm: 4 }, py: { xs: 1, sm: 1.5 } }}
          >
            Watch Video Tour
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => setOpenGalleryModal(true)}
            sx={{ fontWeight: "bold", px: { xs: 2, sm: 4 }, py: { xs: 1, sm: 1.5 } }}
          >
            View Interior & Exterior
          </Button>
        </Box>
      </Box>

      {/* Video Modal */}
      <Dialog
        open={openVideo}
        onClose={() => setOpenVideo(false)}
        maxWidth="lg"
        fullWidth
      >
        <Box sx={{ position: "relative", pt: { xs: "56.25%", sm: "50%", md: "56.25%" } }}>
          <IconButton
            onClick={() => setOpenVideo(false)}
            sx={{ position: "absolute", top: 8, right: 8, color: "#fff", zIndex: 2 }}
          >
            <CloseIcon />
          </IconButton>
          <Box
            component="video"
            src={interiorVideo}
            autoPlay
            loop
            muted
            controls
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "contain",
              backgroundColor: "#000",
            }}
          />
        </Box>
      </Dialog>

      {/* Gallery Modal - Thumbnails */}
      <Dialog
        open={openGalleryModal}
        onClose={() => setOpenGalleryModal(false)}
        maxWidth="lg"
        fullWidth
      >
        <Box sx={{ p: { xs: 2, md: 4 }, position: "relative" }}>
          <IconButton
            onClick={() => setOpenGalleryModal(false)}
            sx={{ position: "absolute", top: 16, right: 16, color: "#000", zIndex: 2 }}
          >
            <CloseIcon fontSize="large" />
          </IconButton>

          <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
            Interior & Exterior Gallery
          </Typography>

          <Grid container spacing={2}>
            {galleryImages.map((img, idx) => (
              <Grid item xs={6} sm={4} md={3} key={idx}>
                <Box
                  component="img"
                  src={img.src}
                  alt={`Gallery ${idx + 1}`}
                  onClick={() => handleThumbnailClick(idx)}
                  sx={{
                    width: "100%",
                    height: 200,
                    objectFit: "cover",
                    cursor: "pointer",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                    },
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Dialog>

      {/* Lightbox */}
      {openLightbox && (
        <Lightbox
          open={openLightbox}
          index={photoIndex}
          close={() => setOpenLightbox(false)}
          slides={galleryImages}
          plugins={[]}
        />
      )}
    </Box>
  );
};

export default VideoSection;
