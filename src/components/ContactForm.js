// src/components/ContactForm.js
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!formValues.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formValues.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = 'Email address is invalid';
      isValid = false;
    }

    if (!formValues.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      // Simulate form submission delay
      setTimeout(() => {
        setFormValues({ name: '', email: '', message: '' }); // Reset form values
        setErrors({ name: '', email: '', message: '' }); // Reset error messages
        setSubmitted(false); // Reset submitted state
      }, 2000); // 2 seconds delay for simulation
      console.log('Form submitted:', formValues);
    }
  };

  return (
    <Box id="contact" sx={{ py: 10, bgcolor: 'background.default' }}>
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Typography variant="h2" color="textPrimary" gutterBottom>
          Contact Me
        </Typography>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            margin="normal"
            required
            name="name"
            value={formValues.name}
            onChange={handleChange}
            error={Boolean(errors.name)}
            helperText={errors.name}
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            margin="normal"
            required
            name="email"
            value={formValues.email}
            onChange={handleChange}
            error={Boolean(errors.email)}
            helperText={errors.email}
          />
          <TextField
            fullWidth
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            margin="normal"
            required
            name="message"
            value={formValues.message}
            onChange={handleChange}
            error={Boolean(errors.message)}
            helperText={errors.message}
          />
          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: 3 }}
            fullWidth
            type="submit"
          >
            Send Message
          </Button>
        </form>
        {submitted && <Typography variant="body1" color="success.main" sx={{ mt: 2 }}>Message sent successfully!</Typography>}
      </Container>
    </Box>
  );
};

export default ContactForm;
