// src/components/ContactForm.js
import React from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const ContactForm = () => {
  return (
    <Box sx={{ py: 10, bgcolor: 'background.default' }}>
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Typography variant="h2" color="textPrimary" gutterBottom>
          Contact Me
        </Typography>
        <form noValidate autoComplete="off">
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            margin="normal"
            required
          />
          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: 3 }}
            fullWidth
          >
            Send Message
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default ContactForm;
