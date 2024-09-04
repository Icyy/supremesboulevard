import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: 'grey.900', color: 'white', p: 2, textAlign: 'center' }}>
      <Typography variant="body2">© 2024 Property Showcase. All rights reserved.</Typography>
    </Box>
  );
};

export default Footer;
