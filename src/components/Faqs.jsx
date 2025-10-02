import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  styled,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// FAQ data
const faqData = [
  {
    question: "What are the configurations available at Supreme Boulevard?",
    answer:
      "2, 3 and 4 BHK urban resort-style residences. Explore the unit layouts here.",
  },
  {
    question: "Where can I get the brochure for Supreme Boulevard?",
    answer:
      "Click here to download the brochure for Supreme Boulevard.",
  },
  {
    question: "What are the Amenities provided at Supreme Boulevard?",
    answer:
      "Supreme Boulevard features 30+ urban resort-style amenities. From leisure to play, there's something for everyone. Click here to explore the project amenities.",
  },
  {
    question: "Is Supreme Boulevard a Gated Community development?",
    answer:
      "Supreme Boulevard is a gated community with four towers and 30+ amenities.",
  },
  {
    question: "What is the total size of Supreme Boulevard?",
    answer: "Supreme Boulevard is a 5-acre expanse.",
  },
  {
    question: "What is the carpet area of the apartments at Supreme Boulevard?",
    answer: "Supreme Boulevard has 2 BHK apartments starting at 758 sq. ft.",
  },
  {
    question: "How many units does Supreme Boulevard have?",
    answer: "Supreme Boulevard has 188 units in tower B and 128 units in tower A.",
  },
  {
    question: "When is Supreme Boulevard scheduled for possession?",
    answer: "Supreme Boulevard will receive complete OC by March 2029.",
  },
];

// Styled Accordion
const CustomAccordion = styled(Accordion)({
  border: "1px solid #ccc",
  boxShadow: "none",
  mb: 2,
  "&:before": { display: "none" },
});

const CustomAccordionSummary = styled(AccordionSummary)({
  backgroundColor: "#23362e",
  color: "#ffffff",
  "& .MuiAccordionSummary-expandIconWrapper": {
    color: "#e15e3f",
  },
  "& .MuiAccordionSummary-content": {
    alignItems: "center",
    margin: 0,
  },
});

const Faqs = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <Box
      id="faq"
      sx={{
        py: 10,
        backgroundColor: "#212c28",
        borderTop: "1px solid #e6ded2",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h5"
          fontWeight="bold"
          align="center"
          gutterBottom
          sx={{ mb: 5, color:'#e15e3f' }}
        >
          FAQs
        </Typography>

        {faqData.map((item, idx) => (
          <CustomAccordion
            key={idx}
            expanded={expanded === idx}
            onChange={() => setExpanded(expanded === idx ? null : idx)}
          >
            <CustomAccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight="bold">{item.question}</Typography>
            </CustomAccordionSummary>
            <AccordionDetails sx={{ px: 2, pb: 2, backgroundColor: "#23362e" }}>
              <Typography sx={{ color: "#cac9c9ff" }}>{item.answer}</Typography>
            </AccordionDetails>
          </CustomAccordion>
        ))}
      </Container>
    </Box>
  );
};

export default Faqs;
