import React, { useState } from "react";
import { Box, Button, useMediaQuery, useTheme } from "@mui/material";
import EnquiryModal from "./EnquiryModal";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';

const PHONE_NUMBER = "+919920039449";
const EMAIL = "realtors1505@gmail.com";

const CTABar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);
  const [downloadAfterSubmit, setDownloadAfterSubmit] = useState(false);

  // Function to trigger brochure download
  const triggerDownload = () => {
    const link = document.createElement("a");
    link.href = "/brochure.pdf";
    link.download = "brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Desktop CTA Bar */}
      {!isMobile && (
        <Box
          sx={{
            width: "100%",
            py: 1.5,
            px: 4,
            background: "rgba(233, 209, 180, 0.75)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            borderBottom: "1px solid rgba(0,0,0,0.1)",
            position: "sticky",
            top: 64,
            zIndex: 1000,
          }}
        >
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              href={`tel:${PHONE_NUMBER}`}
              sx={{
                background: "linear-gradient(135deg, #CC5500, #b23c28)",
                "&:hover": { background: "linear-gradient(135deg, #c5442eff, #b63a27ff)" },
                color: "white",
                px: 3,
                fontWeight: 600,
              }}
            >
              <CallIcon sx={{ mr: 1 }} /> Call Now
            </Button>

            <Button
              variant="outlined"
              href={`mailto:${EMAIL}`}
              sx={{
                borderColor: "#CC5500",
                color: "#CC5500",
                px: 3,
                fontWeight: 600,
                "&:hover": { borderColor: "#c67520", color: "#000" },
              }}
            >
              <EmailIcon sx={{ mr: 1 }} /> Email Us
            </Button>

            <Button
              variant="contained"
              onClick={() => setOpen(true)}
              sx={{
                background: "#2C5F34",
                color: "white",
                px: 3,
                fontWeight: 600,
                "&:hover": { background: "#1b2c25" },
              }}
            >
              🏡 Enquire / Schedule Free Visit
            </Button>

            {/* Download Brochure */}
            <Button
              variant="outlined"
              onClick={() => { setOpen(true); setDownloadAfterSubmit(true); }}
              sx={{
                borderColor: "#d9583c",
                color: "#CC5500",
                px: 3,
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                "&:hover": { borderColor: "#c67520", color: "#000" },
              }}
            >
              <DownloadIcon sx={{ mr: 1 }} /> Download Brochure
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
              "&:hover": { background: "linear-gradient(135deg, #b23c28, #8a2c1e)" },
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
              "&:hover": { background: "linear-gradient(135deg, #b23c28, #8a2c1e)" },
              px: 2,
            }}
          >
            Enquire
          </Button>

          {/* Mobile Download Button */}
          <Button
            size="small"
            variant="outlined"
            onClick={() => { setOpen(true); setDownloadAfterSubmit(true); }}
            sx={{
              borderColor: "#fff",
              color: "#fff",
              px: 2,
              display: "flex",
              alignItems: "center",
            }}
          >
            <DownloadIcon sx={{ mr: 0.5 }} />
          </Button>
        </Box>
      )}

      {/* Enquiry Modal */}
      <EnquiryModal
        open={open}
        onClose={() => setOpen(false)}
        onSuccess={() => {
          if (downloadAfterSubmit) {
            triggerDownload();
            setDownloadAfterSubmit(false);
          }
        }}
      />
    </>
  );
};

export default CTABar;
