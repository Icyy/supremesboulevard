import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Modal,
  TextField,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import { Menu as MenuIcon, Description as DescriptionIcon, Call as CallIcon } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import logo from '../assets/logo.png'

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [downloadPDF, setDownloadPDF] = useState(false); // Flag to determine action

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleModalOpen = (shouldDownload) => {
    setDownloadPDF(shouldDownload);
    setModalOpen(true);
  };

  const handleModalClose = () => setModalOpen(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = { name, email, phone };

    try {
      const response = await fetch("https://formspree.io/f/xovejdwz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        downloadPDF? alert("Downloading Brochure"):alert("Form submitted successfully!");
        setName("");
        setEmail("");
        setPhone("");
        setModalOpen(false);

        // Only download the PDF if "Download Brochure" was clicked
        if (downloadPDF) {
          const link = document.createElement("a");
          link.href = "/brochure.pdf"; // Ensure this file is inside the "public" folder
          link.download = "brochure.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again later.");
    }
  };

  const toggleDrawer = (open) => () => setMobileOpen(open);

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "black", padding: "8px 0" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "white", flexGrow: 1, textAlign: { xs: "center", sm: "left" } }}
          >
            <img src={logo} alt="Supreme Boulevard" style={{height:'40px', width:'100px'}} />
          </Typography>

          {!isMobile ? (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Button sx={{ fontWeight: "bold", color: "black", marginRight: "10px" }} onClick={() => handleModalOpen(false)}>
                <CallIcon sx={{ marginRight: "5px" }} /> Call us - 9619684057
              </Button>
              <Button sx={{ fontWeight: "bold", color: "black" }} onClick={() => handleModalOpen(true)}>
                Download Brochure <DescriptionIcon sx={{ marginLeft: "5px" }} />
              </Button>
            </Box>
          ) : (
            <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleModalOpen(false)}>
                <CallIcon sx={{ marginRight: "5px" }} />
                <ListItemText primary="Call us - 8097039049" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleModalOpen(true)}>
                <DescriptionIcon sx={{ marginRight: "5px" }} />
                <ListItemText primary="Download Brochure" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Modal */}
      <Modal open={modalOpen} onClose={handleModalClose}>
        <Box
          sx={{
            p: 4,
            maxWidth: { xs: "90%", sm: 400 },
            mx: "auto",
            mt: "10%",
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            {downloadPDF ? "Download Brochure" : "Request More Information"}
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField label="Name" variant="outlined" fullWidth sx={{ mb: 2 }} value={name} onChange={(e) => setName(e.target.value)} required />
            <TextField label="Email" variant="outlined" fullWidth sx={{ mb: 2 }} value={email} onChange={(e) => setEmail(e.target.value)} required />
            <TextField label="Phone Number" variant="outlined" fullWidth sx={{ mb: 2 }} value={phone} onChange={(e) => setPhone(e.target.value)} required />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default Navbar;
