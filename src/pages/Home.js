// src/pages/Home.js
import React from 'react';
import About from '../components/About';
import Projects from '../components/Projects';
import ContactForm from '../components/ContactForm';
import { Box } from '@mui/material';

const Home = () => {
  return (
    <Box sx={{ pt: 10 }}>
      <About />
      <Projects />
      <ContactForm />
    </Box>
  );
};

export default Home;
