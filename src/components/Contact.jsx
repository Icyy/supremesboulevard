import React, { useState } from "react";
import { Box, Button, TextField, Typography, Modal } from "@mui/material";

const Contact = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name,
      email,
      phone,
    };

    try {
      const response = await fetch("https://formspree.io/f/xovejdwz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully! We'll get in touch soon.");
        setName("");
        setEmail("");
        setPhone("");
        setModalOpen(false);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again later.");
    }
  };

  return (
    <Box sx={{ textAlign: "center", mt: 5, mb:10 }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Button variant="contained" color="primary" onClick={() => setModalOpen(true)}>
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
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography variant="h6">Enter Your Details</Typography>
          <TextField
            required
            label="Name"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            required
            label="Email"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            required
            label="Phone"
            type="tel"
            fullWidth
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default Contact;
