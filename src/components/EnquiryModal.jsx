import React, { useEffect, useState } from "react";
import {
  Dialog,
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";

const EnquiryModal = ({ open, onClose }) => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // 🔹 Reset form & state whenever modal is closed OR reopened
  useEffect(() => {
    if (!open) {
      // reset on close
      setForm({ name: "", phone: "", message: "" });
      setSubmitted(false);
      setLoading(false);
    }
  }, [open]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xovejdwz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSubmitted(true);
        setForm({ name: "", phone: "", message: "" });
      } else {
        alert("There was an issue submitting the form. Please try again.");
      }
    } catch (err) {
      alert("Network error, please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <Box sx={{ p: 4, textAlign: "center" }}>
        {!submitted ? (
          <>
            <Typography variant="h5" fontWeight="bold" color="black" mb={3}>
              Enquire Now
            </Typography>

            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                margin="normal"
                label="Full Name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                InputProps={{
                  sx: {
                    color: "#000",
                    backgroundColor: "#fff",
                    borderRadius: 1,
                  },
                }}
                InputLabelProps={{
                  sx: { color: "#555" },
                }}
              />

              <TextField
                fullWidth
                margin="normal"
                label="Phone Number"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                InputProps={{
                  sx: {
                    color: "#000",
                    backgroundColor: "#fff",
                    borderRadius: 1,
                  },
                }}
                InputLabelProps={{
                  sx: { color: "#555" },
                }}
              />

              <TextField
                fullWidth
                margin="normal"
                label="Message"
                name="message"
                multiline
                rows={3}
                value={form.message}
                onChange={handleChange}
                InputProps={{
                  sx: {
                    color: "#000",
                    backgroundColor: "#fff",
                    borderRadius: 1,
                  },
                }}
                InputLabelProps={{
                  sx: { color: "#555" },
                }}
              />

              <Button
                type="submit"
                variant="contained"
                disabled={loading}
                fullWidth
                sx={{
                  mt: 3,
                  background: "linear-gradient(135deg, #d9583c, #b23c28)",
                  "&:hover": {
                    background: "linear-gradient(135deg, #b23c28, #8a2c1e)",
                  },
                }}
              >
                {loading ? (
                  <CircularProgress size={24} sx={{ color: "white" }} />
                ) : (
                  "Submit Enquiry"
                )}
              </Button>
            </form>

            <Typography variant="body2" color="#d9583c" mt={2}>
              or call us directly at{" "}
              <a
                href="tel:+919920039449"
                style={{ color: "#d9583c", fontWeight: 600 }}
              >
                +91 9920039449
              </a>{" "}
              to schedule a free site visit!
            </Typography>
          </>
        ) : (
          <>
            <Typography variant="h5" fontWeight="bold" mb={2}>
              Thank You!
            </Typography>
            <Typography variant="body1" mb={3}>
              Your enquiry has been received. Our team will reach out to you
              shortly.
            </Typography>
            <Button
              variant="contained"
              onClick={onClose}
              sx={{
                background: "linear-gradient(135deg, #d9583c, #b23c28)",
                "&:hover": {
                  background: "linear-gradient(135deg, #b23c28, #8a2c1e)",
                },
              }}
            >
              Close
            </Button>
          </>
        )}
      </Box>
    </Dialog>
  );
};

export default EnquiryModal;
