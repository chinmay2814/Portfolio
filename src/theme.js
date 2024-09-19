// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1F2937', // Dark gray (primary)
    },
    secondary: {
      main: '#3B82F6', // Blue (accent color)
    },
    background: {
      default: '#F3F4F6', // Light gray (background)
    },
    text: {
      primary: '#111827', // Dark text
      secondary: '#6B7280', // Lighter gray for secondary text
    },
  },
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
  },
});

export default theme;
