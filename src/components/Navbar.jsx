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

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Fix for screens < 600px

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setModalOpen(false);
  };

  const toggleDrawer = (open) => () => {
    setMobileOpen(open);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#fff", color: "black", padding: "8px 0" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
          {/* Logo */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: "bold",
              flexGrow: 1,
              textAlign: { xs: "center", sm: "left" }, // Center on small screens
              marginBottom: { xs: "5px", sm: "0" }, // Prevent overlap
            }}
          >
            Supreme Boulevard
          </Typography>

          {/* Desktop Navigation */}
          {!isMobile ? (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Button
                sx={{ fontWeight: "bold", color: "black", marginRight: "10px", whiteSpace: "nowrap" }}
                onClick={handleModalOpen}
              >
                <CallIcon sx={{ marginRight: "5px" }} /> Call us - 8097039049
              </Button>
              <Button sx={{ fontWeight: "bold", color: "black" }} onClick={handleModalOpen}>
                Download Brochure <DescriptionIcon sx={{ marginLeft: "5px" }} />
              </Button>
            </Box>
          ) : (
            <>
              {/* Mobile Menu Button */}
              <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={handleModalOpen}>
                <CallIcon sx={{ marginRight: "5px" }} />
                <ListItemText primary="Call us - 8097039049" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={handleModalOpen}>
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
