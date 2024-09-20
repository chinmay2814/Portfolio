// src/components/Header.js
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box, Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';  // Hamburger icon
import CloseIcon from '@mui/icons-material/Close'; // Close icon for the Drawer
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const handleListItemClick = (section) => {
    setSelectedItem(section);
    setIsDrawerOpen(false); // Close drawer on item click
  };

  // Function to reload the page
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <AppBar position="fixed" color="primary" elevation={4}>
      <Toolbar>
        {/* Button to reload the page */}
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, cursor: 'pointer' }}
          onClick={reloadPage}
        >
          My Portfolio
        </Typography>

        {/* Desktop Menu (hidden on small screens) */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Button color="inherit" component={ScrollLink} to="about" smooth={true} duration={500}>About</Button>
          <Button color="inherit" component={ScrollLink} to="projects" smooth={true} duration={500}>Projects</Button>
          <Button color="inherit" component={ScrollLink} to="contact" smooth={true} duration={500}>Contact</Button>
        </Box>

        {/* Mobile Menu - Hamburger Icon (visible on small screens) */}
        <IconButton
          color="inherit"
          edge="end"
          aria-label="menu"
          sx={{ display: { xs: 'block', md: 'none' } }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Drawer (Side Menu for Mobile) */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 250, position: 'relative' }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <IconButton
            onClick={toggleDrawer(false)}
            sx={{ position: 'absolute', top: 10, right: 10 }}
          >
            <CloseIcon />
          </IconButton>
          <List>
            {['About', 'Projects', 'Contact'].map((text) => (
              <ListItem
                button
                key={text}
                onClick={() => handleListItemClick(text)}
                sx={{
                  bgcolor: selectedItem === text ? 'rgba(0, 0, 0, 0.1)' : 'transparent',
                  '&:hover': {
                    bgcolor: selectedItem === text ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.05)',
                  },
                }}
                component={ScrollLink}
                to={text.toLowerCase()}
                smooth={true}
                duration={500}
              >
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
