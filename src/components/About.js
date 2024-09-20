// src/components/About.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const About = () => {
  return (
    <Box id="about" sx={{ py: 10, bgcolor: 'background.default' }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="h2" color="textPrimary" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" color="textSecondary">
        Welcome! I’m Chinmay Malve, a B.Tech student in Electrical Engineering at MNNIT Allahabad with a passion for solving complex problems. My journey in technology has been driven by a deep interest in Data Structures and Algorithms, especially through the lens of C++.

But that’s just the beginning. I’ve turned ideas into reality with projects like HMP_OJ, a cutting-edge online judge platform tailored for competitive programming enthusiasts, and Cadence Code Editor, a tool that transforms collaborative coding into a seamless experience. I’ve also crafted a Banking System designed to streamline personal finance management. Each project not only showcases my technical skills but also my commitment to creating solutions that make a difference.

Explore my work and see how I blend technical expertise with innovative thinking!
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
