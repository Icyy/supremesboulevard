import React, { useState } from "react";
import { Box, Button, TextField, Typography, Modal } from "@mui/material";

const Contact = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://formspree.io/f/xovejdwz", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      alert("Thanks for reaching out! We’ll get back to you shortly.");
      setForm({ name: "", email: "", phone: "" });
      setModalOpen(false);
    } else {
      alert("There was a problem submitting the form. Please try again.");
    }
  };

  return (
    <Box sx={{ textAlign: "center", py: 8, bgcolor: "#f4eee3" }}>
      <Typography variant="h4" color="black" fontWeight={700} gutterBottom>
        Get in Touch
      </Typography>
      <Typography variant="body1" color="grey" sx={{ mb: 3 }}>
        Have questions? Schedule a site visit or request more details.
      </Typography>
      <Button
        variant="contained"
        onClick={() => setModalOpen(true)}
        sx={{
          bgcolor: "#df8b26",
          color: "white",
          background: "linear-gradient(135deg, #d9583c, #b23c28)",
          "&:hover": {
            background: "linear-gradient(135deg, #b23c28, #8a2c1e)",
          },
        }}
      >
        Enquire Now
      </Button>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: 320, sm: 400 },
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: 2,
            p: 4,
          }}
        >
          <Typography variant="h6" color="black" fontWeight={600} mb={2}>
            Enter Your Details
          </Typography>
          <TextField
            fullWidth
            label="Name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            margin="dense"
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            margin="dense"
          />
          <TextField
            fullWidth
            label="Phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            margin="dense"
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2, bgcolor: "#23362e", color: "#fff" }}
          >
            Submit
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default Contact;
