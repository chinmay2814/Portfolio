// src/components/Footer.js
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => (
  <Box component="footer" sx={{ bgcolor: 'primary.main', py: 4, mt: 'auto' }}>
    <Container maxWidth="lg">
      <Typography variant="body2" color="textSecondary" align="center">
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </Typography>
    </Container>
  </Box>
);

export default Footer;
