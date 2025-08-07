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

const navLinks = [
  "HOME",
  "OVERVIEW",
  "AMENITIES",
  "LOCATION",
  "ENQUIRE NOW",
];

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar
      position="sticky"
      sx={{ bgcolor: "#5d7345", color: "#212c28", boxShadow: 1 }}
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
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
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
                          sx: { color: "#212c28", fontWeight: 600 },
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
                sx={{ color: "#212c28", fontWeight: 600 }}
              >
                {link}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
