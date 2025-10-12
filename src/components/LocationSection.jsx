import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  styled,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import map from "../assets/maps.png";

// Location data
const locationData = [
  {
    title: "Infrastructure",
    locations: [
      { name: "Eastern Express Way", time: "15 mins" },
      { name: "Sion-Panvel Highway", time: "10 mins" },
      { name: "Eastern Freeway", time: "5 mins" },
      { name: "LBS Marg", time: "15 mins" },
      { name: "Chembur Railway Station", time: "10 mins" },
      { name: "Metro Line 2B", time: "5 mins" },
    ],
  },
  {
    title: "Key Landmarks",
    locations: [
      { name: "BKC", time: "15 mins" },
      { name: "Nariman Point", time: "30 mins" },
      { name: "Vashi, Navi Mumbai", time: "20 mins" },
    ],
  },
  {
    title: "Hospitals",
    locations: [{ name: "Apollo Spectra Hospital", time: "10 mins" }],
  },
  {
    title: "Schools",
    locations: [{ name: "St. Gregorios High School", time: "10 mins" }],
  },
  {
    title: "Recreation",
    locations: [
      { name: "Chembur Gymkhana", time: "10 mins" },
      { name: "Chembur Golf Course", time: "10 mins" },
      { name: "Diamond Garden", time: "5 mins" },
      { name: "Cubic Mall", time: "5 mins" },
    ],
  },
];

// Custom Accordion
const CustomAccordion = styled(Accordion)(({ theme }) => ({
  border: "1px solid #ccc",
  boxShadow: "none",
  mb: 2,
  "&:before": { display: "none" },
}));

const CustomAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  backgroundColor: "#23362e",
  color: "#ffffff",
  "& .MuiAccordionSummary-expandIconWrapper": {
    color: "#e15e3f", // arrow color
  },
  "& .MuiAccordionSummary-content": {
    alignItems: "center",
    margin: 0,
  },
}));

const LocationSection = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <Box id="location" sx={{ position: "relative", width: "100%", height: "100vh" }}>
      {/* Static Map */}
      <Box
        component="img"
        src={map}
        alt="Map of Chembur"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "grayscale(100%) brightness(0.8)",
        }}
      />

      {/* Accordion on the right */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 20, // small margin from right edge
          height: "100%",
          width: { xs: "100%", md: 380 },
          maxHeight: "100vh",
          overflowY: "auto",
          p: 3,
          zIndex: 10,
        }}
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ mb: 2, fontWeight:'bold', fontSize: { xs: 24, md: 30 }, color: "#23362e", }}
        >
          Nearby Locations
        </Typography>

        {locationData.map((cat, idx) => (
          <CustomAccordion
            key={idx}
            expanded={activeCategory === idx}
            onChange={() =>
              setActiveCategory(idx === activeCategory ? null : idx)
            }
          >
            <CustomAccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight="bold" sx={{ color: "white",fontSize: { xs: 15, md: 16 } }}>
                {cat.title}
              </Typography>
            </CustomAccordionSummary>
            <AccordionDetails sx={{ px: 2, pb: 2, backgroundColor: "#23362e" }}>
              {cat.locations.map((loc, i) => (
                <Box
                  key={i}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography sx={{ fontSize: { xs: 13, md: 14 }, color: "#ffffff" }}>
                    {loc.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: 13, md: 14 },
                      fontWeight: 500,
                      color: "#e15e3f",
                    }}
                  >
                    {loc.time}
                  </Typography>
                </Box>
              ))}
            </AccordionDetails>
          </CustomAccordion>
        ))}
      </Box>
    </Box>
  );
};

export default LocationSection;
