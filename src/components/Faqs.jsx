import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Faqs = () => {
  return (
    <>
      <Box
        id="faq"
        sx={{
          py: 10,
          backgroundColor: "#f8f6f2",
          borderTop: "1px solid #e6ded2",
        }}
      >
        <Container>
          <Typography
            variant="h5"
            fontWeight="bold"
            align="center"
            gutterBottom
          >
            FAQs
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary">
            FAQ section placeholder
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Faqs;
