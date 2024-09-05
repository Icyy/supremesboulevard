import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DescriptionIcon from '@mui/icons-material/Description';
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const Navbar = () => {
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
    <>
      <AppBar
        position="static"
        sx={{ margin: 0, paddingBottom: '15px', paddingTop: '15px', top: 0, left: 0, right: 0 }}
      >
        <Toolbar sx={{ margin: 0, padding: 0 }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: '1000' }}>
            Supremes Boulevard
          </Typography>
          <Button
            sx={{ borderRadius: '0px', color: 'black', fontWeight: 'bold' }}
            color="inherit"
            onClick={handleModalOpen} // Trigger the modal open handler
          >
            Download Brochure <DescriptionIcon sx={{ marginLeft: '5px' }} />
          </Button>
        </Toolbar>
      </AppBar>

      {/* Modal for requesting more information */}
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
    </>
  );
};

export default Navbar;
