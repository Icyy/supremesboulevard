import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Image } from "mui-image";

const navLinks = ["HOME", "OVERVIEW", "AMENITIES", "LOCATION"];

const Navbar = ({ onOpenEnquiry }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: isMobile
          ? "rgba(255, 255, 255, 0.09)" // lighter glass effect on mobile
          : "rgba(255, 255, 255, 0.09)", // dark solid color for desktop
        color: "#fff",
        boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
        backdropFilter: isMobile ? "blur(12px)" : "none",
        WebkitBackdropFilter: isMobile ? "blur(12px)" : "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Image
          src="https://ext.same-assets.com/2668250428/1187644062.webp"
          height="48px"
          fit="contain"
          style={{ width: "auto", marginRight: "auto" }}
          duration={0}
        />

        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ ml: "auto" }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  bgcolor: "rgba(255, 255, 255, 0.25)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                },
              }}
            >
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}
              >
                <List>
                  {navLinks.map((link) => (
                    <ListItem
                      button
                      component="a"
                      href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
                      key={link}
                    >
                      <ListItemText
                        primary={link}
                        primaryTypographyProps={{
                          sx: { color: "white", fontWeight: 600 },
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: "flex", gap: 3 }}>
            {navLinks.map((link) => (
              <Button
                key={link}
                href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
                sx={{
                  color: "#fff",
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                  "&:hover": { color: "#e15e3f" },
                }}
              >
                {link}
              </Button>
            ))}
            <Button
              onClick={onOpenEnquiry}
              href={`#enquiry`}
              sx={{
                color: "#fff",
                fontWeight: 600,
                whiteSpace: "nowrap",
                "&:hover": { color: "#e15e3f" },
              }}
            >
              Enquire
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
