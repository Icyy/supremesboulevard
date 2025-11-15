import React, { useEffect, useState } from "react";
import {
  Dialog,
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";

// Google Ads conversion
const trackGoogleConversion = () => {
  if (window.gtag) {
    window.gtag("event", "conversion", {
      send_to: "AW-17153886132/h-r_CIaamtQaELSPzvM_",
      value: 1.0,
      currency: "INR",
    });
  }
};

// Brochure download
const downloadBrochure = () => {
  const link = document.createElement("a");
  link.href = "/brochure.pdf";
  link.download = "brochure.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// All Indian states + UTs
const statesInIndia = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttarakhand",
  "Uttar Pradesh",
  "West Bengal",
  // Union Territories
  "Delhi",
  "Jammu & Kashmir",
  "Ladakh",
  "Chandigarh",
  "Puducherry",
  "Andaman & Nicobar Islands",
  "Lakshadweep",
  "Dadra & Nagar Haveli & Daman & Diu",
];

const EnquiryModal = ({ open, onClose, onSuccess }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    state: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (!open) {
      setForm({ name: "", phone: "", state: "", message: "" });
      setErrors({});
      setSubmitted(false);
      setLoading(false);
    }
  }, [open]);

  // Validation Rules
  const validate = () => {
    let newErrors = {};

    // Name Validation: Only letters, spaces, min 3 chars
    if (!/^[A-Za-z ]{3,}$/.test(form.name.trim())) {
      newErrors.name =
        "Enter a valid full name (letters only, min 3 characters).";
    }

    const phone = form.phone;

    // Basic 10-digit + starts with 6/7/8/9
    if (!/^[6-9]\d{9}$/.test(phone)) {
      newErrors.phone = "Enter a valid 10-digit Indian number.";
    }

    // Block repeated digits (1111111111, 9999999999)
    if (/^(\d)\1{9}$/.test(phone)) {
      newErrors.phone = "Invalid Indian mobile number.";
    }

    // Block sequential numbers (1234567890, etc)
    if (
      phone === "1234567890" ||
      phone === "0123456789" ||
      phone === "9876543210"
    ) {
      newErrors.phone = "Invalid Indian mobile number.";
    }

    // Block unrealistic patterns
    const first4 = phone.substring(0, 4);
    const fakeInvalidStarts = [
      "6000",
      "7000",
      "8000",
      "9000",
      "6666",
      "7777",
      "8888",
      "9999",
    ];

    if (fakeInvalidStarts.includes(first4)) {
      newErrors.phone = "Invalid Indian mobile number.";
    }

    // State required
    if (!form.state) {
      newErrors.state = "Please select your state.";
    }

    // Set all errors
    setErrors(newErrors);

    // Return false if any error exists
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Restrict name input
    if (name === "name") {
      const cleaned = value.replace(/[^A-Za-z ]/g, "");
      setForm({ ...form, name: cleaned });
      return;
    }

    // Allow only digits in phone
    if (name === "phone") {
      const cleaned = value.replace(/\D/g, "").slice(0, 10);
      setForm({ ...form, phone: cleaned });
      return;
    }

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validate();
    if (!isValid) {
      console.log("Validation failed");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        name: form.name,
        phone: form.phone,
        state: form.state,
        message: form.message || "",
        timestamp: new Date().toLocaleString("en-IN"),
      };

      // Call Vercel serverless API
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitted(true);
        setForm({ name: "", phone: "", state: "", message: "" });

        trackGoogleConversion();
        if (onSuccess) onSuccess();
        else downloadBrochure();
      } else {
        const err = await response.json().catch(() => ({}));
        console.error("Backend error:", err);
        alert("Unable to submit. Please try again later.");
      }
    } catch (err) {
      console.error("Frontend API error:", err);
      alert("Network error — please try again.");
    } finally {
      setLoading(false);
    }
  };

  
  const handleCallClick = () => {
    trackGoogleConversion();
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
              Schedule your FREE visit here!
            </Typography>

            <form onSubmit={handleSubmit}>
              {/* Name */}
              <TextField
                fullWidth
                margin="normal"
                label="Full Name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
                InputProps={{
                  sx: {
                    color: "#000",
                    backgroundColor: "#fff",
                    borderRadius: 1,
                  },
                }}
                InputLabelProps={{
                  sx: { color: "#555", "&.Mui-focused": { color: "#b23c28" } },
                }}
              />

              {/* Phone */}
              <TextField
                fullWidth
                margin="normal"
                label="Phone Number"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                error={!!errors.phone}
                helperText={errors.phone}
                InputProps={{
                  sx: {
                    color: "#000",
                    backgroundColor: "#fff",
                    borderRadius: 1,
                  },
                }}
                InputLabelProps={{
                  sx: { color: "#555", "&.Mui-focused": { color: "#b23c28" } },
                }}
              />

              {/* State Dropdown */}
              <TextField
                select
                fullWidth
                name="state"
                margin="normal"
                label="Select Your State"
                required
                value={form.state}
                onChange={handleChange}
                error={!!errors.state}
                helperText={errors.state}
                sx={{ color: "black" }}
                InputProps={{
                  sx: {
                    color: "#000",
                    backgroundColor: "#fff",
                    borderRadius: 1,
                    "& .MuiSelect-select": {
                      textAlign: "left", // align selected value to the start
                    },
                  },
                }}
                InputLabelProps={{
                  sx: { color: "#555", "&.Mui-focused": { color: "#b23c28" } },
                }}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      bgcolor: "#fff",
                      color: "#000",
                    },
                  },
                }}
              >
                {statesInIndia.map((st) => (
                  <MenuItem key={st} value={st} sx={{ color: "#000" }}>
                    {st}
                  </MenuItem>
                ))}
              </TextField>

              {/* Optional Message */}
              <TextField
                fullWidth
                margin="normal"
                label="Message (Optional)"
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
                  sx: { color: "#555", "&.Mui-focused": { color: "#b23c28" } },
                }}
              />

              <Button
                type="submit"
                variant="contained"
                disabled={loading}
                fullWidth
                sx={{
                  mt: 3,
                  py: 1.5,
                  background: "linear-gradient(135deg, #CC5500, #b23c28)",
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
              sx={{ fontSize: isMobile ? "0.85rem" : "1rem" }}
            >
              or{" "}
              <span
                onClick={handleCallClick}
                style={{
                  color: "#d9583c",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                call us directly
              </span>{" "}
              at +91 99200 39449 to schedule a free site visit!
            </Typography>
          </>
        ) : (
          <>
            <Typography variant="h5" color="black" fontWeight="bold" mb={2}>
              Thank You!
            </Typography>
            <Typography variant="body1" color="grey" mb={3}>
              Your enquiry has been received. Our team will contact you shortly.
            </Typography>
            <Button
              variant="contained"
              onClick={onClose}
              sx={{
                background: "linear-gradient(135deg, #d9583c, #b23c28)",
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
