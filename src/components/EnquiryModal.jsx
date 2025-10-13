import React, { useEffect, useState } from "react";
import {
  Dialog,
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
  useMediaQuery,
  useTheme,
} from "@mui/material";

//  Helper function for Google Ads conversion
const trackGoogleConversion = () => {
  if (window.gtag) {
    window.gtag("event", "conversion", {
      send_to: "AW-17153886132/h-r_CIaamtQaELSPzvM_",
      value: 1.0,
      currency: "INR",
    });
  }
};

//  Helper function to download brochure
const downloadBrochure = () => {
  const link = document.createElement("a");
  link.href = "/brochure.pdf";
  link.download = "brochure.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const EnquiryModal = ({ open, onClose, onSuccess }) => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Reset form when modal closes
  useEffect(() => {
    if (!open) {
      setForm({ name: "", phone: "", message: "" });
      setSubmitted(false);
      setLoading(false);
    }
  }, [open]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    //  Phone number validation: only allow digits
    if (name === "phone") {
      const numericValue = value.replace(/\D/g, ""); // remove non-digits
      setForm({ ...form, [name]: numericValue });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

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

        //  Track Google Ads conversion
        trackGoogleConversion();

        //  Trigger brochure download if passed
        if (onSuccess) {
          onSuccess(); // this will trigger download from CTABar
        } else {
          downloadBrochure();
        }
      } else {
        alert("There was an issue submitting the form. Please try again.");
      }
    } catch (err) {
      alert("Network error, please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleCallClick = () => {
    trackGoogleConversion(); // Track call as a conversion too
    window.location.href = "tel:+919920039449";
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <Box sx={{ p: { xs: 3, sm: 4 }, textAlign: "center" }}>
        {!submitted ? (
          <>
            <Typography
              variant={isMobile ? "h6" : "h5"}
              fontWeight="bold"
              color="black"
              mb={3}
            >
              Enquire Now
            </Typography>

            <form onSubmit={handleSubmit}>
              {["name", "phone", "message"].map((field) => (
                <TextField
                  key={field}
                  fullWidth
                  margin="normal"
                  label={
                    field === "name"
                      ? "Full Name"
                      : field === "phone"
                      ? "Phone Number"
                      : "Message"
                  }
                  name={field}
                  required={field !== "message"}
                  multiline={field === "message"}
                  rows={field === "message" ? 3 : 1}
                  value={form[field]}
                  onChange={handleChange}
                  InputProps={{
                    sx: {
                      color: "#000",
                      backgroundColor: "#fff",
                      borderRadius: 1,
                    },
                  }}
                  InputLabelProps={{ sx: { color: "#555" } }}
                />
              ))}

              <Button
                type="submit"
                variant="contained"
                disabled={loading}
                fullWidth
                sx={{
                  mt: 3,
                  py: 1.5,
                  fontSize: isMobile ? "0.9rem" : "1rem",
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

            <Typography
              variant="body2"
              color="#d9583c"
              mt={2}
              sx={{
                fontSize: isMobile ? "0.85rem" : "1rem",
                px: isMobile ? 1 : 0,
              }}
            >
              or{" "}
              <span
                onClick={handleCallClick}
                style={{
                  color: "#d9583c",
                  fontWeight: 600,
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                call us directly
              </span>{" "}
              at +91 9920039449 to schedule a free site visit!
            </Typography>
          </>
        ) : (
          <>
            <Typography variant="h5" color="black" fontWeight="bold" mb={2}>
              Thank You!
            </Typography>
            <Typography variant="body1" color="grey" mb={3}>
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
