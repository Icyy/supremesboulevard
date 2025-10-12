import React, { useState } from "react";
import { Box, Button, useMediaQuery, useTheme } from "@mui/material";
import EnquiryModal from "./EnquiryModal";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

const PHONE_NUMBER = "+919920039449";
const EMAIL = "omestates11@gmail.com";

const CTABar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop CTA Bar */}
      {!isMobile && (
        <Box
          sx={{
            width: "100%",
            py: 1.5,
            px: 4,
            background: "rgba(233, 209, 180, 0.11)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            borderBottom: "1px solid rgba(0,0,0,0.1)",
            position: "sticky",
            top: 64, // adjusts based on navbar height
            zIndex: 1000,
          }}
        >
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              href={`tel:${PHONE_NUMBER}`}
              sx={{
                bgcolor: "#df8b26",
                color: "white",
                px: 3,
                fontWeight: 600,
                background: "linear-gradient(135deg, #d9583c, #b23c28)",
                "&:hover": {
                  background: "linear-gradient(135deg, #b23c28, #8a2c1e)",
                },
              }}
            >
               <CallIcon sx={{marginRight:'0.5vw'}}></CallIcon> Call Now
            </Button>

            <Button
              variant="outlined"
              href={`mailto:${EMAIL}`}
              sx={{
                borderColor: "#d9583c",
                color: "#ffffffff",
                px: 3,
                fontWeight: 600,
                "&:hover": { borderColor: "#c67520", color: "#000" },
              }}
            >
              <EmailIcon sx={{marginRight:'0.5vw'}}/> Email Us
            </Button>

            <Button
              variant="contained"
              onClick={() => setOpen(true)}
              sx={{
                bgcolor: "#23362e",
                color: "white",
                px: 3,
                fontWeight: 600,
                "&:hover": { bgcolor: "#1b2c25" },
              }}
            >
              🏡 Enquire / Schedule Free Visit
            </Button>
          </Box>
        </Box>
      )}

      {/* Mobile Sticky CTA */}
      {isMobile && (
        <Box
          sx={{
            position: "fixed",
            bottom: 12,
            left: 12,
            right: 12,
            zIndex: 1400,
            display: "flex",
            gap: 1,
            justifyContent: "space-between",
            p: 1,
            background: "rgba(35,54,46,0.95)",
            borderRadius: 2,
            boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
          }}
        >
          <Button
            size="small"
            variant="contained"
            href={`tel:${PHONE_NUMBER}`}
            sx={{
              background: "linear-gradient(135deg, #d9583c, #b23c28)",
              "&:hover": {
                background: "linear-gradient(135deg, #b23c28, #8a2c1e)",
              },
              color: "white",
              px: 2,
            }}
          >
            Call
          </Button>
          <Button
            size="small"
            variant="outlined"
            href={`mailto:${EMAIL}`}
            sx={{ borderColor: "#fff", color: "#fff", px: 2 }}
          >
            Email
          </Button>
          <Button
            size="small"
            variant="contained"
            onClick={() => setOpen(true)}
            sx={{
              background: "linear-gradient(135deg, #d9583c, #b23c28)",
              "&:hover": {
                background: "linear-gradient(135deg, #b23c28, #8a2c1e)",
              },
              px: 2,
            }}
          >
            Enquire
          </Button>
        </Box>
      )}

      <EnquiryModal open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default CTABar;
