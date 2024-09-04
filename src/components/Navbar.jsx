import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{ margin: 0, padding: 0, top: 0, left: 0, right: 0 }}
    >
      <Toolbar sx={{ margin: 0, padding: 0 }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight:'bold' }}>
        Supremes Boulevard
        </Typography>
        <Button color="inherit">Download Brochure</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
