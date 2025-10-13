import React from "react";
import { Box, Typography } from "@mui/material";
import { Image } from "mui-image";

const Footer = () => {
  return (
    <Box
      sx={{
        py: 5,
        backgroundColor: "#212c28",
        color: "#e6ded2",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Image
        src="https://images.squarespace-cdn.com/content/v1/66fd0ccc95b74e6b2cb1c64d/8de93105-ea8c-48fb-94b6-dd7bd6707fb3/boulevard-logo.png"
        height={64}
        width={96}
        fit="contain"
        duration={0}
        style={{ margin: "auto", marginBottom: 20 }}
      />
      <Typography variant="body2" sx={{ opacity: 0.6 }}>
        Maha RERA No: A51900004566 | Supreme Boulevard Chembur | All rights
        reserved 2025
      </Typography>
      <Typography variant="body2" sx={{ opacity: 0.6, marginTop:'2vh' }}>
        Disclaimer: All images, visuals, perspectives, illustrations, models,
        specifications, plans, designs, drawings, dimensions, maps, facilities,
        amenities, features, and other information/details herein are
        conceptual, indicative and for representation purposes only and are not
        to scale, and is subject to the approval of the respective authorities.
        The Promoters/Developers/Architect reserve the right to add, alter,
        delete or replace any of these in the interest of development without
        any notice or obligation. This printed material does not constitute an
        offer or contract between the Promoters / Developers and the recipient.
        All transactions in this development shall be subject to and governed by
        the terms & conditions of the Agreement for Sale to be entered into
        between the parties.
      </Typography>
    </Box>
  );
};

export default Footer;
