// src/components/About.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ py: 10, bgcolor: 'background.default' }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="h2" color="textPrimary" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" color="textSecondary">
          I'm a passionate web developer with experience in building modern web applications using React and Material-UI.
          I love creating beautiful and functional user interfaces.
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
